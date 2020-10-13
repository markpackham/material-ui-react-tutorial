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
import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
  topography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
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
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <h3>
              Learn Material UI in React from
              https://www.youtube.com/watch?v=vyJU9efvUtQ
            </h3>
            <Typography variant="h2" component="div">
              This is a div with h2 styling
            </Typography>
            <Typography variant="subtitle1">This is subtitle1</Typography>
            <Typography variant="body1">This is body1</Typography>
            <ButtonStyled />
            <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
