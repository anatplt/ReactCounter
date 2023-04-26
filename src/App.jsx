import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Increment counter={counter} setCounter={setCounter} />
      <p>{counter}</p>
      <Decrement counter={counter} setCounter={setCounter} />
      <Reset setCounter={setCounter} />
    </div>
  );
};

export default App;
