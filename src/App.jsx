import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <img src="./" alt="" />
      <h1>React Counter</h1>
      <div>
        <Increment counter={counter} setCounter={setCounter} />
        <p>{counter}</p>
        <Decrement counter={counter} setCounter={setCounter} />
        <Reset setCounter={setCounter} />
      </div>
    </main>
  );
};

export default App;
