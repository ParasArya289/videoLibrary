import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { RxCross2 } from "react-icons/rx";
import "./AddToPlayListPopover.css";
import { v4 } from "uuid";
import { useData } from "../../Context/dataContext";

const AddToPlayListPopover = ({ children, isAdding, vid }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "New Playlist",
    desc: "My new favorites",
    content: [],
  });

  const {
    dataState: { playlists },
    dispatchData,
  } = useData();

  const collectFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const createNewPlaylistHandler = () => {
    dispatchData({
      type: "CREATE_PLAYLIST",
      payload: { _id: v4(), ...formData },
    });
    setOpen(false);
  };
  const addToPlaylistHandler = (ID) => {
    dispatchData({
      type: "ADD_TO_PLAYLIST",
      payload: {
        id: ID,
        data: vid,
      },
    });
    setOpen(false);
  };
  const removePlaylistHandler = (ID) => {
    dispatchData({
      type: "REMOVE_PLAYLIST",
      payload: ID,
    });
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger className="Trigger">{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p className="Text" style={{ marginBottom: 10 }}>
              {!isAdding ? "Add Playlist" : "Add to playlist"}
            </p>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="width">
                Name
              </label>
              <input
                className="Input"
                name="title"
                id="width"
                onChange={collectFormData}
                defaultValue={formData.title}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="maxWidth">
                Description
              </label>
              <input
                className="Input"
                id="maxWidth"
                name="desc"
                onChange={collectFormData}
                defaultValue={formData.desc}
              />
            </fieldset>
            <button className="SaveBtn" onClick={createNewPlaylistHandler}>
              Save
            </button>
            {isAdding && (
              <div>
                {playlists?.map(({ _id, title }) => (
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      onClick={() => addToPlaylistHandler(_id)}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      {title}
                    </button>
                    <RxCross2
                      style={{ cursor: "pointer" }}
                      onClick={() => removePlaylistHandler(_id)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            <RxCross2 />
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default AddToPlayListPopover;
