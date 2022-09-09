const index = ({ instructors }) => {
  return (
    <section>
      <h2>Instructors</h2>
      <pre>{JSON.stringify(instructors, null, 2)}</pre>
    </section>
  );
};

export default index;
