import React from "react";
import HomePageCourses from "@widgets/HomePage/Courses";
import HomePageHeader from "@widgets/HomePage/Header";
import TopCategories from "@widgets/HomePage/TopCategories";
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
