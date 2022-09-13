import LanguageIcon from "@mui/icons-material/Language";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Rating from "@components/Rating";
import CourseBadge from "@components/CourseBadge";
import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./Details.module.css";
import clsx from "clsx";
import Button from "@components/Button";

const Langs = ({ captions, lastUpdateDate }) => {
  const [captionLangs, setCaptionLangs] = useState(captions.slice(0, 2));
  lastUpdateDate = new Date(lastUpdateDate).toLocaleString().split(", ")[0];
  return (
    <div className={classes.lang}>
      <span>
        <NewReleasesIcon fontSize="small" /> Last updated {lastUpdateDate}
      </span>
      <span>
        <LanguageIcon fontSize="small" /> English
      </span>
      <span>
        <ClosedCaptionIcon fontSize="small" />
        <span>
          {captionLangs.join(", ")}
          {captionLangs.length < captions.length && (
            <>
              <span>, </span>
              <Button
                varient="text"
                onClick={() => {
                  setCaptionLangs(captions);
                }}
              >
                {captions.length - captionLangs.length} more
              </Button>
            </>
          )}
        </span>
      </span>
    </div>
  );
};

const Details = ({ details, className }) => {
  const {
    id,
    title,
    rating,
    headline,
    last_update_date,
    num_reviews,
    num_subscribers,
    visible_instructors,
    caption_languages,
    badges,
  } = details;
  return (
    <div className={clsx(classes.details, className)}>
      <h1>{title}</h1>
      <p>{headline}</p>
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
      <div>
        Created by{" "}
        {visible_instructors.length > 0 && (
          <Link to={visible_instructors[0].url}>{visible_instructors[0].display_name}</Link>
        )}
        {visible_instructors.slice(1).map((inst) => {
          return (
            <span key={inst.url}>
              {", "}
              <Link to={inst.url}>{inst.display_name}</Link>
            </span>
          );
        })}
      </div>
      <Langs captions={caption_languages} lastUpdateDate={last_update_date} />
    </div>
  );
};

export default Details;
