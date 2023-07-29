import { useParams } from "react-router";
import { SuggestedVideoCard } from "../../Components/SuggestedVideoCard/SuggestedVideoCard";
import { LayoutTemplate } from "../../Components/UI/LayoutTemplate/LayoutTemplate";
import { useData } from "../../Context/dataContext";
import "./Video.css";
import { MdOutlineWatchLater, MdPlaylistAdd } from "react-icons/md";

export const Video = () => {
  const { videoId } = useParams();
  const {
    dataState: { videos },
  } = useData();

  const findVideo = videos?.find(({ _id }) => _id == +videoId);

  console.log(findVideo, videoId);

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
                <MdOutlineWatchLater />
                <MdPlaylistAdd />
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
            <SuggestedVideoCard video={video} />
          ))}
        </div>
      </div>
    </LayoutTemplate>
  );
};
