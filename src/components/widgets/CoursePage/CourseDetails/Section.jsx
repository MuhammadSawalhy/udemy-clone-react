import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenContext from "./OpenContext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import classes from "./Section.module.css";
import clsx from "clsx";
import { useContext, useMemo, useState } from "react";

const SectionItem = ({ item }) => {
  const [descriptionOpened, setDescriptionOpened] = useState();
  const { title, can_be_previewed, content_summary, description } = item;
  return (
    <div
      className={clsx(
        classes.item,
        can_be_previewed && classes.previewable,
        descriptionOpened && classes.descriptionOpened
      )}
    >
      <span className={classes.icon}>
        <PlayCircleIcon fontSize="small" />
      </span>
      <span className={classes.title}>{title}</span>
      {description && (
        <span
          className={classes.openCloseDescription}
          role="button"
          onClick={() => {
            setDescriptionOpened((old) => !old);
          }}
        >
          <ExpandMoreIcon fontSize="small" />
        </span>
      )}
      {description && (
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )}
      {can_be_previewed && <span className={classes.previewText}>Preview</span>}
      <span className={classes.summary}>{content_summary}</span>
    </div>
  );
};

const Section = ({ section, index }) => {
  // TODO: make this opens and closes when you click on it
  const { title, content_length, lecture_count, items } = section;
  const [openState, setOpenState] = useContext(OpenContext);
  const opened = openState[index];
  const setOpened = (state) => {
    setOpenState((old) => {
      const n = [...old];
      n[index] = state;
      return n;
    });
  };

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
    <div className={clsx(classes.section, opened && classes.opened)}>
      <div
        role="button"
        className={classes.openClose}
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <span className={classes.arrow}>
          <ExpandMoreIcon />
        </span>
        <span className="fw-bold flex-grow-1">{title}</span>
        <div className="ms-auto" style={{ fontSize: "1.4rem" }}>
          <span>
            {lecture_count} lectures • <span>{contentLength}</span>
          </span>
        </div>
      </div>
      <div className={classes.items}>
        {items.map((item) => (
          <SectionItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
