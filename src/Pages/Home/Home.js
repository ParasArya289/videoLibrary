import { CategoriesCard } from "../../Components/CategoriesCard/CategoriesCard";
import { LayoutTemplate } from "../../Components/UI/LayoutTemplate/LayoutTemplate";
import { useData } from "../../Context/dataContext";
import "./Home.css";

export const Home = () => {
  const {
    dataState: { categories },
  } = useData();

  return (
    <LayoutTemplate>
      <h2>Categories</h2>
      <div className="categories-container">
        {categories?.map((category) => (
          <CategoriesCard category={category} />
        ))}
      </div>
    </LayoutTemplate>
  );
};
