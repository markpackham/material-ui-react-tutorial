import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

function CheckboxExample() {
  return <div>Test</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Learn Material UI in React from
          https://www.youtube.com/watch?v=vyJU9efvUtQ
        </h3>
        <CheckboxExample />
        <ButtonGroup variant="contained" size="large">
          <Button startIcon={<SaveIcon />} color="primary">
            Save
          </Button>
          <Button startIcon={<DeleteIcon />} color="danger">
            Delete
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
