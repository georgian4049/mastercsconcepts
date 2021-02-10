import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import {
  StylesProvider,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Login from "./pages/Login";
import Layout from "./layout/Layout";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: "#0460a9",
    },
    secondary: {
      main: "#F26522",
    },
    background: "#fff",
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontSize: "6.857rem",
      lineHeight: "8rem",
    },
    h2: {
      fontSize: "4.286rem",
      lineHeight: "5.143rem",
    },
    h3: {
      fontSize: "3.429rem",

      lineHeight: "4rem",
    },
    h4: {
      fontSize: "2.429rem",

      lineHeight: "2.571rem",
    },
    h5: {
      fontSize: "1.714rem",
      lineHeight: "1.714rem",
    },
    h6: {
      fontSize: "1.0rem",
      lineHeight: "1.714rem",
    },
    caption: {
      fontSize: "0.857rem",
      lineHeight: "0.857rem",
    },
    button: {
      fontSize: "1rem",
      lineHeight: "1.143rem",
    },
    overline: {
      fontSize: "0.714rem",
      lineHeight: "1.143rem",
    },
  },
  chip: {
    pending: {
      color: "#fff",
      background: "linear-gradient(to right bottom, #04f7f3, #0072ff)",
    },
    granted: {
      color: "#fff",
      background: "linear-gradient(to right bottom, #13f448, #4f9305)",
    },
    declined: {
      color: "#fff",
      background: "linear-gradient(to right bottom,#fcb3b3, #f40c0c )",
    },
  },
});

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;
