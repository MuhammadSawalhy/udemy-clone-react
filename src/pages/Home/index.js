import React from "react";
import HomePageCourses from "widgets/Home/Courses";
import HomePageHeader from "widgets/Home/Header";
import TopCategories from "widgets/Home/TopCategories";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homepage}>
      <HomePageHeader />
      <main>
        <HomePageCourses />
        <TopCategories />
      </main>
    </div>
  );
};

export default Home;
