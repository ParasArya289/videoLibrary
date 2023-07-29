import { useNavigate } from "react-router";
import "./SuggestedVideoCard";

export const SuggestedVideoCard = ({
  video: { _id, title, views, thumbnail, src, category, creator },
}) => {
  const navigate = useNavigate();
  return (
    <div className="videocard" onClick={() => navigate("/video/" + _id)}>
      <img src={thumbnail} alt={title} />
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
