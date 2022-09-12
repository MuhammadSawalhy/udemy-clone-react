const NothingHere = ({ caption }) => {
  // TODO: make this component better
  caption ??= "Nothing here!";
  return <div>{caption}</div>;
};

export default NothingHere;
