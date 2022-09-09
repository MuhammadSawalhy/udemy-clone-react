import React, { useState, useEffect } from "react";
import classes from "./CoursesCarousel.module.css";

import CourseCard from "../CourseCard";
// import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import useCardsCount from "../../hooks/useCardsCount";

const CoursesCarousel = ({ courses }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsCount = useCardsCount();
  const slidesCount = Math.ceil(courses.length / cardsCount);

  useEffect(() => {
    // when the screen size increase and the current index is out of bound
    const maxIndex = slidesCount - 1;
    if (activeIndex > maxIndex) setActiveIndex(maxIndex);
  }, [activeIndex, slidesCount]);

  const slides = [];
  let coursesPool = [...courses];

  // take from the coures and make a slide with N cards, where N = cardsCount
  // when the exists number less than N just take them, the loop will end when
  // no more courses are left
  while (coursesPool.length) {
    const slideCourses = coursesPool.slice(0, cardsCount);
    coursesPool = coursesPool.slice(cardsCount);
    slides.push(
      <Carousel.Item key={coursesPool.length}>
        <div className="d-flex gap-3 px-2 justify-content-evenly">
          {slideCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Carousel.Item>
    );
  }

  return (
    <div className={classes.coursesCarousel}>
      <Carousel activeIndex={activeIndex} onSelect={(i) => setActiveIndex(i)}>
        {slides}
      </Carousel>
    </div>
  );
};

export default React.memo(CoursesCarousel);
