import clsx from "clsx";
import classes from "./TopCategories.module.css";
import topCategories from "constants/top-categories.json";
import Category from "./Category";

const TopCategories = () => {
  return (
    <section>
      <h2>Top categories</h2>
      <div class={clsx("row g-0", classes.topCategories)}>
        {topCategories.map(cat => <Category key={cat.category} {...cat} />)}
      </div>
    </section>
  );
};

export default TopCategories;
