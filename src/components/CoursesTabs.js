import React, { useState } from "react";
import classes from "./CoursesTabs.module.css";
import clsx from "clsx";
import Courses from "./Courses";
import tabs from "../constants/tabs.json";

const CoursesTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs.find((tab) => tab.category === "python"));
  return (
    <div>
      <div className={classes.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.category}
            onClick={() => setActiveTab(tab)}
            className={clsx(activeTab.category === tab.category && classes.active)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <Courses {...activeTab} />
    </div>
  );
};

export default CoursesTabs;
