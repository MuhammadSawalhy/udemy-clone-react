import { useMemo } from "react";
import { useParams } from "react-router-dom";
import Button from "@components/Button";
import NothingHere from "@components/NothingHere";
import CoursesCarousel from "@components/CoursesCarousel";
import classes from "./Tab.module.css";

const Courses = ({ title, header, description, items }) => {
  const { query } = useParams();
  const filteredItems = useMemo(
    () => (query ? items.filter((item) => item.title.includes(query)) : items),
    [items, query]
  );
  return (
    <div className={classes.tab}>
      <div className={classes.header}>
        <h2>{header}</h2>
        <p>{description}</p>
        <Button varient="secondary">Explore {title}</Button>
      </div>
      {filteredItems.length > 0 ? (
        <CoursesCarousel courses={filteredItems} />
      ) : (
        <NothingHere caption="No course matches the search in this tab" />
      )}
    </div>
  );
};

export default Courses;
