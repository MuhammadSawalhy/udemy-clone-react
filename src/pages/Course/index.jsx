import Header from "@widgets/CoursePage/Header";
import Instructors from "@widgets/CoursePage/Instructors";
import CourseDetails from "@widgets/CoursePage/CourseDetails";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { BACKEND_URL } from "@constants";
import classes from "./index.module.css";

const Course = () => {
  const { courseId } = useParams();
  const { isLoading, error, isError, data } = useQuery(["course", courseId], () => {
    return fetch(`${BACKEND_URL}/data/${courseId}`).then((res) => {
      if (!res.ok) throw res;
      return res.json();
    });
  });

  if (isLoading) {
    // TODO: create a decent loading component
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error(error);

    return (
      <div>
        <p style={{ color: "red" }}>Error occured during fetching the data</p>
        <pre>{error.statusText}</pre>
      </div>
    );
  }

  console.log(data);

  // TODO: build SeeMore component and use it in needed places
  return (
    <div className={classes.coursepage}>
      <Header course={data} />
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