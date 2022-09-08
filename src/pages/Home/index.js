import React from "react";
import HomePageCourses from "../../widgets/Home/Courses";
import HomePageHeader from "../../widgets/Home/Header";
import TopCategories from "../../widgets/Home/TopCategories";

const Home = () => {
  return (
    <>
      <HomePageHeader />
      <main>
        <HomePageCourses />
        <TopCategories />
      </main>
    </>
  );
};

export default Home;
