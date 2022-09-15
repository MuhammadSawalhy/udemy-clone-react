import React, { useState } from "react";
import classes from "./CoursesTabs.module.css";
import clsx from "clsx";
import Tab from "./Tab";
import { useQuery } from "react-query";
import { BACKEND_URL } from "@constants";

const CoursesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const {
    isLoading,
    error,
    data: tabs,
  } = useQuery(["homepage-courses-tabs"], () => {
    return fetch(`${BACKEND_URL}/summary`).then((res) => {
      if (!res.ok) throw res;
      return res.json();
    });
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error(error);

    return (
      <div>
        <p style={{ color: "red" }}>Error occured during fetching the data</p>
        <pre>{error.statusText}</pre>
      </div>
    );
  }

  return (
    <div>
      <div className={classes.tabs}>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(i)}
            className={clsx(i === activeTab && classes.active)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <Tab {...tabs[activeTab]} />
    </div>
  );
};

export default CoursesTabs;
