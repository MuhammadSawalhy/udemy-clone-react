const index = ({ instructors }) => {
  return (
    <section>
      <h1>Instructors</h1>
      <pre>{JSON.stringify(instructors, null, 2)}</pre>
    </section>
  );
};

export default index;
