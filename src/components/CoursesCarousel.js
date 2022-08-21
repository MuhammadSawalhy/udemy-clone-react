import React, { useState, useEffect } from "react";
import classes from "./CoursesCarousel.module.css";

import CourseCard from "./CourseCard";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import useCardsCount from "../custom-hooks/useCardsCount";

const CoursesCarousel = ({ courses }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const cardsCount = useCardsCount();
  const slidesCount = Math.ceil(courses.length / cardsCount);

  useEffect(() => {
    // when the screen size increase and the current index is out of bound
    const maxIndex = slidesCount - 1;
    if (activeIndex > maxIndex) setActiveIndex(maxIndex);
  }, [activeIndex, slidesCount]);

  const next = () => {
    if (animating) return;
    const nextIndex = (activeIndex + 1) % slidesCount;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const prevIndex = (activeIndex - 1 + slidesCount) % slidesCount;
    setActiveIndex(prevIndex);
  };

  const slides = [];
  let coursesPool = Array.from(courses);

  // take from the coures and make slide with N cards, where N = cardsCount
  // when the exists number less than N just take them, the loop will end when no more courses exist
  while (coursesPool.length) {
    const slideCourses = coursesPool.slice(0, cardsCount);
    coursesPool = coursesPool.slice(cardsCount);
    slides.push(
      <CarouselItem
        key={coursesPool.length}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className="d-flex gap-3 px-2 justify-content-evenly">
          {slideCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </CarouselItem>
    );
  }

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl
        className={classes.carouselControlPrev}
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        className={classes.carouselControlNext}
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CoursesCarousel;
