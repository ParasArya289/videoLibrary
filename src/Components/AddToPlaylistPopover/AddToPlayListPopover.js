import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { RxCross2 } from "react-icons/rx";
import "./AddToPlayListPopover.css";

const AddToPlayListPopover = ({ children }) => (
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
            <input className="Input" id="width" defaultValue="Playlist" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxWidth">
              Description
            </label>
            <input className="Input" id="maxWidth" defaultValue="New favorites" />
          </fieldset>
          <button className="SaveBtn">Save</button>
        </div>
        <Popover.Close className="PopoverClose" aria-label="Close">
          <RxCross2 />
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default AddToPlayListPopover;
