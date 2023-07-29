import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { RxCross2 } from "react-icons/rx";
import "./AddToPlayListPopover.css";
import { v4 } from "uuid";
import { useData } from "../../Context/dataContext";

const AddToPlayListPopover = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "New Playlist",
    desc: "My new favorites",
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
  };
  console.log(playlists);
  return (
    <Popover.Root>
      <Popover.Trigger>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <p className="Text" style={{ marginBottom: 10 }}>
              Dimensions
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
