import Button from "../../../components/Button";
import CoursesCarousel from "../../../components/CoursesCarousel";
import classes from "./Tab.module.css";

const Courses = ({ title, header, description, items }) => {
  return (
    <div className={classes.tab}>
      <div className={classes.header}>
        <h2>{header}</h2>
        <p>{description}</p>
        <Button varient="secondary">Explore {title}</Button>
      </div>
      <CoursesCarousel courses={items} />
    </div>
  );
};

export default Courses;
