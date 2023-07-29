import { Route, Routes } from "react-router";
import "./App.css";
import { Category } from "./Pages/Category/Category";
import { Explore } from "./Pages/Explore/Explore";
import { Home } from "./Pages/Home/Home";
import { Playlist } from "./Pages/Playlist/Playlist";
import { Playlists } from "./Pages/Playlists/Playlists";
import { Video } from "./Pages/Video/Video";
import { WatchLater } from "./Pages/WatchLater/WatchLater";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlists />} />
        <Route path="/watchlater" element={<WatchLater />} />

        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/video/:videoId" element={<Video />} />
        <Route path="/playlist/:playlistId" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
