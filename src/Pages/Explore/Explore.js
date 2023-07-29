import { useMemo, useState } from "react";
import { LayoutTemplate } from "../../Components/UI/LayoutTemplate/LayoutTemplate";
import { VideoCard } from "../../Components/VideoCard.js/VideoCard";
import { useData } from "../../Context/dataContext";
import "./Explore.css";
import { RxMagnifyingGlass } from "react-icons/rx";

export const Explore = () => {
  const [searchKey, setSearchKey] = useState("");
  const {
    dataState: { videos },
  } = useData();

  const filteredVideos = useMemo(() => {
    return videos?.filter(({ title }) =>
      title?.toLowerCase()?.includes(searchKey?.toLowerCase())
    );
  }, [searchKey]);

  let timerId;
  const debounce = (e) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      setSearchKey(e.target.value);
    }, 300);
  };

  return (
    <LayoutTemplate>
      <h2>Explore</h2>

      <div className="searchbar">
        <RxMagnifyingGlass />
        <input
          type="text"
          placeholder="Search by title"
          onChange={(e) => debounce(e)}
        />
      </div>

      <div className="categories-container">
        {filteredVideos?.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </LayoutTemplate>
  );
};
