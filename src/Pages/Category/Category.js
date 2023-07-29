import { useParams } from "react-router";
import { LayoutTemplate } from "../../Components/UI/LayoutTemplate/LayoutTemplate";
import { VideoCard } from "../../Components/VideoCard.js/VideoCard";
import { useData } from "../../Context/dataContext";
import "./Category";

export const Category = () => {
  const { categoryName } = useParams();
  const {
    dataState: { videos },
  } = useData();

  const findCategoryVideo = videos?.filter(
    ({ category }) => category === categoryName
  );

  return (
    <LayoutTemplate>
      <h2>{categoryName}</h2>
      <div className="categories-container">
        {findCategoryVideo?.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </LayoutTemplate>
  );
};
