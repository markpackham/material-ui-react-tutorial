import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      }
      label="Testing checkbox"
    />
  );
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
