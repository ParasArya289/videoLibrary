import { AddPlaylistCard } from "../../Components/PaylistCard/AddPlaylistCard";
import { PlaylistCard } from "../../Components/PaylistCard/PlaylistCard";
import { LayoutTemplate } from "../../Components/UI/LayoutTemplate/LayoutTemplate";
import { useData } from "../../Context/dataContext";

export const Playlists = () => {
  const {
    dataState: { playlists },
  } = useData();
  return (
    <LayoutTemplate>
      <h3>Playlists</h3>
      <div className="categories-container">
        {playlists?.map((playlist) => (
          <PlaylistCard playlist={playlist} />
        ))}
        <AddPlaylistCard />
      </div>
    </LayoutTemplate>
  );
};
