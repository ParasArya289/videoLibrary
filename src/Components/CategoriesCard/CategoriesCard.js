import { useNavigate } from "react-router";
import "./CategoriesCard.css";

export const CategoriesCard = ({
  category: { _id, thumbnail, src, category },
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="categorycard"
      onClick={() => navigate("/category/" + category)}
    >
      <img src={thumbnail} alt={category} />
      <text>{category}</text>
    </div>
  );
};
