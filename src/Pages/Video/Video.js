import { useParams } from "react-router";
import { SuggestedVideoCard } from "../../Components/SuggestedVideoCard/SuggestedVideoCard";
import { LayoutTemplate } from "../../Components/UI/LayoutTemplate/LayoutTemplate";
import { useData } from "../../Context/dataContext";
import "./Video.css";
import {
  MdOutlineWatchLater,
  MdPlaylistAdd,
  MdWatchLater,
} from "react-icons/md";
import { VideoCard } from "../../Components/VideoCard.js/VideoCard";
import AddToPlayListPopover from "../../Components/AddToPlaylistPopover/AddToPlayListPopover";

export const Video = () => {
  const { videoId } = useParams();
  const {
    dataState: { videos, watchlater },
    dispatchData,
  } = useData();

  const findVideo = videos?.find(({ _id }) => _id == +videoId);

  const addToWatchLaterHandler = (e) => {
    e.stopPropagation();
    dispatchData({
      type: "ADD_TO_WATCHLATER",
      payload: findVideo,
    });
  };
  const removeFromoWatchLaterHandler = (e) => {
    e.stopPropagation();
    dispatchData({
      type: "REMOVE_FROM_WATCHLATER",
      payload: findVideo?._id,
    });
  };

  return (
    <LayoutTemplate>
      <div className="video-layout">
        <div className="video">
          <iframe
            width="100%"
            height="12%"
            src={findVideo?.src}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-info">
            <img src={findVideo?.thumbnail} alt={findVideo?.creator} />
            <div>
              <text>{findVideo?.title}</text>
              <div className="additional-info">
                <span>{findVideo?.views} Views</span>
                <span> | {findVideo?.creator}</span>
              </div>

              {/* action */}

              <div className="action-btn">
                {watchlater?.some((vid) => vid._id === findVideo?._id) ? (
                  <button
                    className="vwt-btn"
                    onClick={removeFromoWatchLaterHandler}
                  >
                    <MdWatchLater />
                  </button>
                ) : (
                  <button className="vwt-btn" onClick={addToWatchLaterHandler}>
                    <MdOutlineWatchLater />
                  </button>
                )}

                <AddToPlayListPopover isAdding vid={findVideo}>
                  <button className="vwt-btn">
                    <MdPlaylistAdd />
                  </button>
                </AddToPlayListPopover>
              </div>
            </div>
          </div>
          {/* My Notes */}
          <div className="notes">
            <h4>My Notes</h4>
          </div>
        </div>
        <div className="suggestedVideos">
          {videos?.map((video) => (
            <VideoCard video={video} />
          ))}
        </div>
      </div>
    </LayoutTemplate>
  );
};
