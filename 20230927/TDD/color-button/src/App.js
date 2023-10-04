import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState("red");

  return (
    <div className="App">
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => setButtonColor(newColor)}
      >
        change to {newColor}!
      </button>
    </div>
  );
}

export default App;
