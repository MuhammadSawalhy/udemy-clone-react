import Instructor from "./Instructor";

const index = ({ instructors }) => {
  console.log(instructors);
  return (
    <section>
      <h2>Instructors</h2>
      <div className="d-flex flex-column" style={{gap: "1.6rem"}}>
        {instructors.map((inst) => (
          <Instructor instructor={inst} />
        ))}
      </div>
    </section>
  );
};

export default index;
