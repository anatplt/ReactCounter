const Increment = (props) => {
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      <span>+</span>
    </button>
  );
};

export default Increment;
