import { useNavigate } from "react-router";
import "./VideoCard.css";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { useData } from "../../Context/dataContext";

export const VideoCard = ({
  video: { _id, title, views, thumbnail, src, category, creator },
}) => {
  const {
    dataState: { watchlater },
    dispatchData,
  } = useData();
  const navigate = useNavigate();

  const addToWatchLaterHandler = (e) => {
    e.stopPropagation();
    dispatchData({
      type: "ADD_TO_WATCHLATER",
      payload: {
        _id,
        title,
        views,
        thumbnail,
        src,
        category,
        creator,
      },
    });
  };
  const removeFromoWatchLaterHandler = (e) => {
    e.stopPropagation();
    dispatchData({
      type: "REMOVE_FROM_WATCHLATER",
      payload: _id,
    });
  };

  return (
    <div className="videocard" onClick={() => navigate("/video/" + _id)}>
      <img src={thumbnail} alt={title} />

      {watchlater?.some((vid) => vid._id === _id) ? (
        <button className="wt-btn" onClick={removeFromoWatchLaterHandler}>
          <MdWatchLater />
        </button>
      ) : (
        <button className="wt-btn" onClick={addToWatchLaterHandler}>
          <MdOutlineWatchLater />
        </button>
      )}

      <div className="video-info">
        <img src={thumbnail} alt={creator} />
        <div>
          <text>{title}</text>
          <div className="additional-info">
            <span>{views} Views</span>
            <span> | {creator}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
