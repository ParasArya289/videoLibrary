import { LayoutTemplate } from "../../Components/UI/LayoutTemplate/LayoutTemplate";
import { VideoCard } from "../../Components/VideoCard.js/VideoCard";
import { useData } from "../../Context/dataContext";

export const WatchLater = () => {
  const {
    dataState: { watchlater },
  } = useData();
  return (
    <LayoutTemplate>
      <h3>WatchLater</h3>
      <div className="categories-container">
        {watchlater?.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </LayoutTemplate>
  );
};
