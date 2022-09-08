import topCategories from "../../../constants/top-categories.json";
import Category from "./Category";

const TopCategories = () => {
  return (
    <section>
      <h2>Top categories</h2>
      <div class="top-categories row g-0">
        {topCategories.map(cat => <Category key={cat.category} {...cat} />)}
      </div>
    </section>
  );
};

export default TopCategories;
