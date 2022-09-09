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
      <div>
        <h2>Requirements</h2>
        <ul className={classes.requirements}>
          {details.Requirements.map((req) => {
            return <li key={req}>{req}</li>;
          })}
        </ul>
      </div>
      <div>
        <h2>Description</h2>
        <div dangerouslySetInnerHTML={{ __html: details.description }}></div>
      </div>
      <div>
        <h2>Who this course is for:</h2>
        <div dangerouslySetInnerHTML={{ __html: details.for_who }}></div>
      </div>
    </section>
  );
};

export default index;
