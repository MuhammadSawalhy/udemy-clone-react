import CourseBadge from "@components/CourseBadge";
import Rating from "@components/Rating";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const TopBar = ({ course }) => {
  const { id, title, rating, num_reviews, num_subscribers, badges } = course.details;
  return (
    <div className={classes.container}>
      <span className={classes.title}>{title}</span>
      <div className={classes.rating}>
        {badges.map((badge) => (
          <CourseBadge key={badge.id} badge={badge} />
        ))}
        <Link to={`/course/${id}/#reviews`}>
          {/* TODO: fix dark theme with empty stars */}
          <Rating
            className={classes.ratingComponent}
            rating={rating}
            numReviews={num_reviews}
            starsColor="#f3ca8c"
            addRatingsText
          />
        </Link>
        <span>{num_subscribers} students</span>
      </div>
    </div>
  );
};

export default TopBar;
