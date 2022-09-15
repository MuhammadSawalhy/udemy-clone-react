import CoursesTabs from "./CoursesTabs";
import classes from "./Courses.module.css";

const HomePageCourses = () => {
  return (
    <section>
      <div className={classes["section1-header"]}>
        <h1 className={classes["heading-serif"]}>A broad selection of courses</h1>
        <p>Choose from 185,000 online video courses with new additions published every month</p>
      </div>
      <CoursesTabs />
    </section>
  );
};

export default HomePageCourses;
