import Button from "@components/atoms/Button";
import { useContext, useEffect, useMemo, useState } from "react";
import classes from "./CourseContent.module.css";
import OpenContext from "./OpenContext";
import Section from "./Section";

const ExpandCollapseAll = () => {
  const [openState, setOpenState] = useContext(OpenContext);
  const areAllExpanded = openState.every((i) => i);
  return (
    <button
      className={classes.expandAllBtn}
      onClick={() => {
        // if all are not expanded expand all
        // if all are expanded collapse all
        setOpenState((old) => old.map(() => !areAllExpanded));
      }}
    >
      {areAllExpanded ? "Collapse all sections" : "Expand all sections"}
    </button>
  );
};

const CourseContent = ({ curriculum }) => {
  const estimatedTime = curriculum.estimated_content_length_text.split(":").slice(0, 2);
  const [sections, setSections] = useState(curriculum.sections.slice(0, 10));
  const [openState] = useContext(OpenContext);

  // when clicking "expand all" we should show all sections and not truncate them
  useEffect(() => {
    // if the truncated sections are opened show all of them
    if (curriculum.sections.length > 10 && openState[10] == true) {
      setSections(curriculum.sections);
    }
  }, [openState, curriculum.sections]);

  console.log(curriculum);

  return (
    <div className={classes.courseContent}>
      <h2>Course content</h2>
      <div className={classes.sectionsHeader}>
        <div className={classes.summary}>
          {curriculum.sections.length} sections •&nbsp;
          {curriculum.num_of_published_lectures} lectures •&nbsp;
          {estimatedTime[0]}h {estimatedTime[1]}m total length
        </div>
        <ExpandCollapseAll />
      </div>
      <div className={classes.sections}>
        {sections.map((section, i) => {
          return <Section key={section.title} section={section} index={i} />;
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

const CourseContentWrapper = ({ curriculum }) => {
  const openState = useState(curriculum.sections.map(() => false));
  return (
    <OpenContext.Provider value={openState}>
      <CourseContent curriculum={curriculum} />
    </OpenContext.Provider>
  );
};

export default CourseContentWrapper;
