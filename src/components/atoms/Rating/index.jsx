import { Rating as Stars } from "@mui/material";
import clsx from "clsx";
import classes from "./Rating.module.css";

const Rating = ({ className, rating, numReviews, addRatingsText, starsColor }) => {
  return (
    <span className={clsx(classes.rating, className)}>
      <span style={{ color: starsColor }} className={classes.ratingRatio}>
        {rating.toFixed(1)}
      </span>
      <Stars
        style={{ color: starsColor }}
        defaultValue={rating}
        precision={0.5}
        size="small"
        readOnly
      />
      <span className={classes.numReviews}>
        ({numReviews}
        {addRatingsText ? " ratings" : ""})
      </span>
    </span>
  );
};

export default Rating;
