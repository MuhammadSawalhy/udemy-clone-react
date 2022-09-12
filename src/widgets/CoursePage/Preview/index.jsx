import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import clsx from "clsx";
import classes from "./index.module.css";

const Preview = ({ image, className }) => {
  return (
    <button className={clsx(classes.preview, className)}>
      <img className={classes.image} src={image} alt="course preview" />
      <span className={classes.playCircle}>
        <PlayCircleIcon />
      </span>
      <span className={classes.text}>Preview this course</span>
    </button>
  );
};

export default Preview;
