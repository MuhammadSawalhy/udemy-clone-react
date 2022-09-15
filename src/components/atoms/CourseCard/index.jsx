import Rating from "../Rating";
import { Link } from "react-router-dom";
import classes from "./CourseCard.module.css";
import CourseBadge from "@components/atoms/CourseBadge";

console.log(classes);

const CourseCard = ({ course }) => {
  const {
    id,
    title,
    badges,
    rating,
    num_reviews,
    visible_instructors,
    image_240x135: image,
    price: { list_price, discount_price },
  } = course;

  return (
    <Link className={classes.course} to={`/course/${id}`}>
      <img className={classes.img} src={image} alt="course cover" />
      <span className={classes.title}>{title}</span>
      <span className="text-small-lite">
        {visible_instructors.map((i) => i.display_name).join()}
      </span>
      <Rating className="text-small-lite" rating={rating} numReviews={num_reviews} size="small" />
      {discount_price ? (
        <span>
          <span className={classes.price}>{discount_price.price_string}</span>
          <span className={classes.oldPrice}>{list_price.price_string}</span>
        </span>
      ) : (
        <span className={classes.price}>{list_price.price_string}</span>
      )}
      <span className={classes.badges}>
        {badges?.map((badge) => (
          <CourseBadge key={badge.id} badge={badge} />
        ))}
      </span>
    </Link>
  );
};

export default CourseCard;
