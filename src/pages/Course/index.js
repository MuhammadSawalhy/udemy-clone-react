import Header from "widgets/CoursePage/Header";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { BACKEND_URL } from "constants";

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

  console.log(data);

  return (
    <div>
      <Header course={data.details} />
    </div>
  );
};

export default Course;
