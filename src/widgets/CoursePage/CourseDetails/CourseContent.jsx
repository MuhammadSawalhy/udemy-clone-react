import Button from "@components/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMemo, useState } from "react";
import classes from "./CourseContent.module.css";
import clsx from "clsx";

const Section = ({ section }) => {
  // TODO: make this opens and closes when you click on it
  const { title, content_length, lecture_count, items } = section;
  const [opened, setOpened] = useState(false);

  const contentLength = useMemo(() => {
    let contentLength = [];
    let hours = Math.floor(content_length / 3600);
    let mins = Math.ceil((content_length % 3600) / 60);
    if (mins === 60) {
      hours++;
      mins = 0;
    }

    contentLength.push(hours > 0 ? hours + "hr" : "");
    contentLength.push(mins > 0 ? mins + "min" : "");
    return contentLength.join(" ");
  }, [content_length]);

  return (
    <div className={clsx(classes.section, opened && classes.opened)} role="button">
      <ExpandMoreIcon />
      <span className="fw-bold flex-grow-1">{title}</span>
      <div className="ms-auto">
        <span>
          {lecture_count} lectures • <span>{contentLength}</span>
        </span>
      </div>
    </div>
  );
};

const CourseContent = ({ curriculum }) => {
  const estimatedTime = curriculum.estimated_content_length_text.split(":").slice(0, 2);
  const [sections, setSections] = useState(curriculum.sections.slice(0, 10));
  return (
    <div className={classes.courseContent}>
      <h2>Course content</h2>
      <div className={classes.sectionsHeader}>
        <div className={classes.summary}>
          {curriculum.sections.length} sections •&nbsp;
          {curriculum.num_of_published_lectures} lectures •&nbsp;
          {estimatedTime[0]}h {estimatedTime[1]}m total length
        </div>
        <button className={classes.expandAllBtn}>Expand all sections</button>
      </div>
      <div className={classes.sections}>
        {sections.map((section) => {
          return <Section section={section} />;
        })}
      </div>
      {curriculum.sections.length > sections.length && (
        <Button
          varient="secondary"
          className="w-100"
          style={{ marginTop: "1.6rem" }}
          onClick={() => {
            setSections(curriculum.sections);
          }}
        >
          {curriculum.sections.length - sections.length} more sections
        </Button>
      )}
    </div>
  );
};

export default CourseContent;
