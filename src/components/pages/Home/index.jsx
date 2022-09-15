import React from "react";
import HomePageCourses from "@components/widgets/HomePage/Courses";
import HomePageHeader from "@components/widgets/HomePage/Header";
import TopCategories from "@components/widgets/HomePage/TopCategories";
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
