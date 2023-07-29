import { LayoutTemplate } from "../../Components/UI/LayoutTemplate/LayoutTemplate";
import { VideoCard } from "../../Components/VideoCard.js/VideoCard";
import { useData } from "../../Context/dataContext";
import { useParams } from "react-router-dom";

export const Playlist = () => {
  const { playlistId } = useParams();
  const {
    dataState: { playlists },
  } = useData();
  const { title, content } = playlists?.find(({ _id }) => _id === playlistId);

  return (
    <LayoutTemplate>
      <h2>{title}</h2>
      {content.length <= 0 && <p>No items added yet!</p>}
      <div className="categories-container">
        {content?.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </LayoutTemplate>
  );
};
