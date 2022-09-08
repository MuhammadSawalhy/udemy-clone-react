import React from "react";
import CoursesTabs from "../../components/CoursesTabs";
import HomePageHeader from "../../widgets/Home/Header";
import TopCategories from "../../widgets/Home/TopCategories";

const Home = () => {
  return (
    <>
      <HomePageHeader />
      <main>
        <section>
          <div class="section1-header">
            <h1 class="heading-serif">A broad selection of courses</h1>
            <p>Choose from 185,000 online video courses with new additions published every month</p>
          </div>
          <CoursesTabs />
        </section>
        <TopCategories />
      </main>
    </>
  );
};

export default Home;
