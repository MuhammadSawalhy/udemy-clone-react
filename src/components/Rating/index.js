import { Rating as Stars } from "@mui/material";
import clsx from "clsx";
import classes from "./Rating.module.css";

const Rating = ({ className, rating, numReviews, size = "medium" }) => {
  return (
    <span className={clsx(classes.rating, className)}>
      <span className={classes.ratingRatio}>{rating.toFixed(1)}</span>
      <Stars defaultValue={rating} precision={0.5} size={size} readOnly />
      <span className={classes.numReviews}>
        ({numReviews}
        {size === "small" ? "" : " ratings"})
      </span>
    </span>
  );
};

export default Rating;
