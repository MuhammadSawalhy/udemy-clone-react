import Header from "widgets/CoursePage/Header";
import Instructors from "widgets/CoursePage/Instructors";
import CourseDetails from "widgets/CoursePage/CourseDetails";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { BACKEND_URL } from "constants";
import classes from "./Course.module.css";

const Course = () => {
  const { courseId } = useParams();
  const { isLoading, error, data } = useQuery(["course", courseId], () => {
    return fetch(`${BACKEND_URL}/data/${courseId}`).then((res) => res.json());
  });

  if (isLoading) {
    // TODO: create a decent loading component
    return "Loading...";
  }

  if (error) {
    console.error(error);

    return (
      <div>
        <p style={{ color: "red" }}>Error occured during fetching the data</p>
        <pre>{error.toString()}</pre>
      </div>
    );
  }

  return (
    <div className={classes.coursepage}>
      <Header course={data.details} />
      <main>
        <div className={classes.mainInner}>
          <CourseDetails course={data} />
          <Instructors instructors={data.details.visible_instructors} />
        </div>
      </main>
    </div>
  );
};

export default Course;
