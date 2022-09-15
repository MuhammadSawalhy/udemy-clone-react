import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import classes from "./Includes.module.css";
import { useMemo } from "react";
import clsx from "clsx";

const Includes = ({ course, className }) => {
  const {
    curriculum_context: {
      data: { estimated_content_length_in_seconds: estimatedTime },
    },
  } = course;

  const duration = useMemo(() => {
    const hours = Math.floor(estimatedTime / 3600);
    const mins = Math.ceil(estimatedTime / 60);
    if (hours !== 0) return hours + " hours";
    return mins + " mins";
  }, [estimatedTime]);

  // TODO: fix the dummy data and but this information in it, or
  // at least make it inferable from the current data
  const { articles, downloadable } = useMemo(() => {
    let articles = 3,
      downloadable = 5;
    return { articles, downloadable };
  }, []);

  return (
    <div className={clsx(className)}>
      <span className="mb-2 fw-bold d-block">This course includes:</span>
      <ul className={classes.list}>
        <li>
          <OndemandVideoOutlinedIcon fontSize="small" /> {duration} on-demand video
        </li>
        {articles !== 0 && (
          <li>
            <InsertDriveFileOutlinedIcon fontSize="small" /> {articles} articles
          </li>
        )}
        {downloadable !== 0 && (
          <li>
            <CloudDownloadOutlinedIcon fontSize="small" /> {downloadable} downloadable resources
          </li>
        )}
        <li>
          <AllInclusiveOutlinedIcon fontSize="small" /> Full lifetime access
        </li>
        <li>
          <PhoneAndroidOutlinedIcon fontSize="small" /> Access on mobile and TV
        </li>
        <li>
          <EmojiEventsOutlinedIcon fontSize="small" /> Certificate of completion
        </li>
      </ul>
    </div>
  );
};

export default Includes;
