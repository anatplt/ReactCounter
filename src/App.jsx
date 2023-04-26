import { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default App;
