import React from "react";
import { Typography, makeStyles, Hidden, Box } from "@material-ui/core";
import cs from "../../assets/gen/cs.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "auto",
    color: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  return (
    <div className={classes["root"]}>
      <Hidden smDown>
        <Box width="50%" ml={5} mt={5} p={5}>
          <img src={cs} alt="cs" />
        </Box>
      </Hidden>
      <Box width="50%">
        <Typography
          paragraph
          align="center"
          variant="h5"
          justifyContent="center"
          style={{ fontFamily: "URW Chancery L, cursive" }}
        >
          Mastercsconcepts is a catalog of core and advanced computer science
          (CS) concepts. CS enthusiasts can use this platform for learning CS
          topics in a structured manner. Users can also use this platform to
          share their technical knowledge by writing technical articles in the
          form of blogs, theoretical contents, research papers, and more.
        </Typography>
      </Box>
    </div>
  );
};

export default AboutUs;
