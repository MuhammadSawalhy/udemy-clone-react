import classes from "./index.module.css";

const CourseBadge = ({ badge }) => {
  const { badge_text } = badge;
  return (
    <span className={classes.badge}>
      {badge_text}
    </span>
  );
};

export default CourseBadge;
