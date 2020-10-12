import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Learn Material UI in React from
          https://www.youtube.com/watch?v=vyJU9efvUtQ
        </h3>
        <Button variant="contained" color="secondary">
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
