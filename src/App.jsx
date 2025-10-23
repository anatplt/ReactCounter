import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";
import logo from "./assets/img/calculator-solid.png";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <section>
      <header>
        <img src={logo} alt="" />
        <h1>React Counter</h1>
      </header>
      <main>
        <div>
          {counter > 0 && (
            <Decrement counter={counter} setCounter={setCounter} />
          )}
          <p>{counter}</p>
          <Increment counter={counter} setCounter={setCounter} />
        </div>
        <div>
          <Reset setCounter={setCounter} />
        </div>
      </main>
      <footer>
        <p>Made with React at Le Reacteur by Anat</p>
      </footer>
    </section>
  );
};

export default App;
