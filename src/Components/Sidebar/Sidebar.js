import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  const addHighlight = ({ isActive }) => isActive && "highlight";
  return (
    <nav className="sidenavbar">
      <div className="sidebar-wrapper">
        <NavLink to="/" className={addHighlight}>
          <div>
            <span>
              <AiFillHome />
            </span>
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink to="/explore" className={addHighlight}>
          <div>
            <span>
              <MdExplore />
            </span>
            <span>Explore</span>
          </div>
        </NavLink>
        <NavLink to="/playlist" className={addHighlight}>
          <div>
            <MdPlaylistAdd />
            <span>Playlists</span>
          </div>
        </NavLink>
        <NavLink to="/watchlater" className={addHighlight}>
          <div>
            <span>
              <MdWatchLater />
            </span>
            <span>Watch Later</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};
