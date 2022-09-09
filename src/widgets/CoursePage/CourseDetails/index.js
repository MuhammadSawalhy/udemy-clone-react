import CourseContent from "./CourseContent";
import WhatYouWillLearn from "./WhatYouWillLearn";
import classes from "./index.module.css";

const index = ({ course }) => {
  const {
    details,
    curriculum_context: { data: curriculum },
  } = course;
  return (
    <section className={classes.courseDetails}>
      <WhatYouWillLearn objectives={details.objectives_summary} />
      <CourseContent curriculum={curriculum} />
    </section>
  );
};

export default index;
