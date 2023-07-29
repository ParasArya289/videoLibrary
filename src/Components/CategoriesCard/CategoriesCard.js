import "./CategoriesCard.css";

export const CategoriesCard = ({
  category: { _id, thumbnail, src, category },
}) => {
  return (
    <div className="categorycard">
      <img src={thumbnail} alt={category} />
      <text>{category}</text>
    </div>
  );
};
