import CourseContent from "./CourseContent";
import WhatYouWillLearn from "./WhatYouWillLearn";

const index = ({ course }) => {
  const { details, curriculum_context: curriculum } = course;
  return (
    <section className="d-flex g-6 flex-col">
      <WhatYouWillLearn objectives={details.objectives_summary} />
      <CourseContent curriculum={curriculum} />
    </section>
  );
};

export default index;
