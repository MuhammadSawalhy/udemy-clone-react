import React from "react";
import starsImage from "../../stars.jpg";
import classes from "./CourseCard.module.css";

console.log(classes);

const CourseCard = ({ course }) => {
  const { id, image, title, instructors, rating, price, discountPrice, badges } = course;
  return (
    <a className={classes.course} href={`/course/${id}`}>
      <img className={classes.img} src={image} alt="course cover" />
      <span className={classes.title}>{title}</span>
      <span className="text-small-lite">{instructors.map((i) => i.name).join()}</span>
      <span className={classes.rating}>
        <span className={classes.ratingRatio}>{rating.toFixed(1)}</span>
        <img className={classes.ratingStars} alt="stars" src={starsImage} />
        <span className="text-small-lite">(2,916)</span>
      </span>
      {discountPrice ? (
        <>
          <span className={classes.price}>E£{discountPrice}</span>
          <span className={classes.oldPrice}>E£{price}</span>
        </>
      ) : (
        <span className={classes.price}>E£{price}</span>
      )}
      <span className={classes.badges}>
        {badges?.map((badge) => (
          <span key={badge} className={classes.badge}>
            {badge}
          </span>
        ))}
      </span>
    </a>
  );
};

export default CourseCard;
