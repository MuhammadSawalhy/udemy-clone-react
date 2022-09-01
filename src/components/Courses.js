import React, { useMemo } from "react";
import CoursesCarousel from "./CoursesCarousel";
import classes from "./Courses.module.css";
import coursesDB from "../constants/db.json";

const Courses = ({title, header, description, category }) => {
  const courses = useMemo(
    () => coursesDB.courses.filter((course) => course.category === category),
    [category]
  );

  return (
    <div className={classes.tab}>
      <div className={classes.header}>
        <h2>{header}</h2>
        <p>{description}</p>
        <button className="button button-secondary">Explore {title}</button>
      </div>
      <CoursesCarousel courses={courses} />
    </div>
  );
}

export default Courses;
