import { Link } from "react-router-dom";
import classes from "./Instructor.module.css";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const Instructor = ({ instructor }) => {
  const { display_name, job_title, url, image_100x100, description } = instructor;
  const { Instructor_Rating, Students, Reviews, Courses } = instructor;
  return (
    <div className={classes.instructor}>
      <Link className={classes.name} to={url}>
        {display_name}
      </Link>
      <span className={classes.job}>{job_title}</span>
      <div className={classes.details}>
        <img src={image_100x100} alt={`instructor, ${display_name}`} />
        <ul>
          <li>
            <StarIcon /> {Instructor_Rating} Instructor rating
          </li>
          <li>
            <WorkspacePremiumIcon /> {Reviews} Reviews
          </li>
          <li>
            <PeopleAltIcon /> {Students} Students
          </li>
          <li>
            <PlayCircleIcon /> {Courses} Courses
          </li>
        </ul>
      </div>
      <div className={classes.description} dangerouslySetInnerHTML={{ __html: description }}></div>
    </div>
  );
};

export default Instructor;
