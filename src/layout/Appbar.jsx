import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import logo from "../assets/logo.png";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Appbar(props) {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar style={{ backgroundColor: "white" }}>
          <Toolbar>
            {/* <Typography variant="h6">Logo</Typography> */}
            <img src={logo} alt="logo" style={{ height: "20px" }} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      {/* <Container><Box my={2}>Content</Box></Container> */}
    </>
  );
}
