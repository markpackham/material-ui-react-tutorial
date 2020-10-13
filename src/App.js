import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { green, orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #999)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "lightgrey",
    padding: "15px 30px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <h3>
            Learn Material UI in React from
            https://www.youtube.com/watch?v=vyJU9efvUtQ
          </h3>
          <ButtonStyled />
          <TextField
            // variant="outlined"
            variant="filled"
            color="secondary"
            // type="date"
            // type="time"
            type="email"
            label="The Time"
            // value="someemail@hotmail.com"
            placeholder="someEmail@hotmail.com"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" size="large">
            <Button startIcon={<SaveIcon />} color="primary">
              Save
            </Button>
            <Button startIcon={<DeleteIcon />} color="secondary">
              Delete
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
