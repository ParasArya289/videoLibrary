import "./PlaylistCard.css";
import { RxCross2 } from "react-icons/rx";
import { useData } from "../../Context/dataContext";
import { useNavigate } from "react-router-dom";


export const PlaylistCard = ({ playlist }) => {
  const { dispatchData } = useData();
  const removePlaylistHandler = (e) => {
    e.stopPropagation();
    dispatchData({ type: "REMOVE_PLAYLIST", payload: playlist._id });
  };
  const navigate = useNavigate();
  return (
    <div
      className="playlistcard"
      onClick={()=>navigate("/playlist/" + playlist?._id)}
    >
      <button className="small vwt-btn" onClick={removePlaylistHandler}>
        <RxCross2 />
      </button>
      <img
        src={
          playlist?.thumbnail ||
          "https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png"
        }
        height="100"
      />
      <p className="title">{playlist?.title}</p>
      <p className="desc">{playlist?.desc}</p>
    </div>
  );
};
