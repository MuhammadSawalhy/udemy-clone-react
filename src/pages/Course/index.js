import React from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  const { courseId } = useParams();

  return (
    <div>
      <h1>{courseId}</h1>
    </div>
  );
};

export default Course;
