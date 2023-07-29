import "./AddPlaylistCard.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import AddToPlayListPopover from "../AddToPlaylistPopover/AddToPlayListPopover";

export const AddPlaylistCard = () => {
  return (
    <div className="AddPlaylistCard">
      <AddToPlayListPopover>
        <button>
          <AiOutlinePlusCircle />
        </button>
      </AddToPlayListPopover>
    </div>
  );
};
