import CoursesTabs from "./CoursesTabs";
import classes from "./Courses.module.css";

const HomePageCourses = () => {
  return (
    <section>
      <div class={classes["section1-header"]}>
        <h1 class={classes["heading-serif"]}>A broad selection of courses</h1>
        <p>Choose from 185,000 online video courses with new additions published every month</p>
      </div>
      <CoursesTabs />
    </section>
  );
};

export default HomePageCourses;
