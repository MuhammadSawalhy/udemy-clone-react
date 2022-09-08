import React, { useMemo } from "react";
import Button from "../Button";
import CoursesCarousel from "../CoursesCarousel";

import classes from "./Courses.module.css";
import coursesDB from "../../constants/db.json";

const Courses = ({ title, header, description, category }) => {
  const courses = useMemo(
    () => coursesDB.courses.filter((course) => course.category === category),
    [category]
  );

  return (
    <div className={classes.tab}>
      <div className={classes.header}>
        <h2>{header}</h2>
        <p>{description}</p>
        <Button varient="secondary">Explore {title}</Button>
      </div>
      <CoursesCarousel courses={courses} />
    </div>
  );
};

export default Courses;
