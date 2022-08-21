import React from "react";
import starsImage from "../stars.jpg";
import classes from "./CourseCard.module.css";

console.log(classes);

const CourseCard = ({ course }) => {
  return (
    <a className={classes.course} href={`/course/${course.id}`}>
      <img className={classes.img} src={course.image} alt="course cover" />
      <span className={classes.title}>{course.title}</span>
      <span className="text-small-lite">{course.instructors.map((i) => i.name).join()}</span>
      <span className={classes.rating}>
        <span className={classes.ratingRatio}>{course.rating.toFixed(1)}</span>
        <img className={classes.ratingStars} alt="stars" src={starsImage} />
        <span className="text-small-lite">(2,916)</span>
      </span>
      {course.discountPrice ? (
        <>
          <span className={classes.price}>E£{course.discountPrice}</span>
          <span className={classes.oldPrice}>E£{course.price}</span>
        </>
      ) : (
        <span className={classes.price}>E£{course.price}</span>
      )}
      <span className={classes.badges}>
        {course.badges?.map((badge) => (
          <span key={badge} className={classes.badge}>
            {badge}
          </span>
        ))}
      </span>
    </a>
  );
};

export default CourseCard;
