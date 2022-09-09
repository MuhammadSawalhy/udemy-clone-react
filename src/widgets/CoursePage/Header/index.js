import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LanguageIcon from "@mui/icons-material/Language";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Rating from "components/Rating";
import classes from "./Header.module.css";

const Header = ({ course }) => {
  const {
    id,
    title,
    rating,
    headline,
    last_update_date,
    num_reviews,
    num_subscribers,
    visible_instructors,
    context_info: { category, subcategory, label },
  } = course;
  const lastUpdateDate = new Date(last_update_date).toLocaleString().split(", ")[0];
  return (
    <header className={classes.header}>
      <div>
        <div className={classes.context}>
          <Link to={category.url}>{category.title}</Link>
          <ChevronRightIcon />
          {subcategory && <Link to={subcategory.url}>{subcategory.title}</Link>}
          <Link to={label.url}>{label.display_name}</Link>
        </div>
        <div className={classes.details}>
          <h1>{title}</h1>
          <p>{headline}</p>
          <div className={classes.rating}>
            <Link to={`/course/${id}/#reviews`}>
              {/* TODO: fix dark theme with empty stars */}
              <Rating rating={rating} numReviews={num_reviews} />
            </Link>
            <span>{num_subscribers} students</span>
          </div>
          <div>
            Created by{" "}
            {visible_instructors.length > 0 && (
              <Link to={visible_instructors[0].url}>{visible_instructors[0].display_name}</Link>
            )}
            {visible_instructors.slice(1).map((inst) => {
              return (
                <>
                  {", "}
                  <Link to={inst.url}>{inst.display_name}</Link>
                </>
              );
            })}
          </div>
          <div className={classes.lang}>
            <span>
              <NewReleasesIcon /> Last updated {lastUpdateDate}
            </span>
            <span>
              <LanguageIcon /> English
            </span>
            <span>
              <ClosedCaptionIcon /> English
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
