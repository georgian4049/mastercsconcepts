import React from "react";
import { makeStyles, Grid, Divider } from "@material-ui/core";
import FAQ from "./FAQ";
import Ask from "./Ask";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: theme.spacing(2),
    // height: "80%",
    "&>*": {
      margin: theme.spacing(2),
    },
    backgroundColor: "#fff",
    minHeight: "86vh",
    padding: theme.spacing(5),
    flexDirection: "column",
  },
  divider: {
    margin: "auto",
    width: "1%",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes["root"]}>
      <Grid container spacing={0}>
        <Grid item sm={12} md={12} lg={6}>
          <FAQ />
        </Grid>
        <Grid item xs={12} sm={12} md={1}>
          <Divider
            orientation="vertical"
            color="secondary"
            className={classes["divider"]}
          />
        </Grid>
        <Grid item sm={12} md={12} lg={5}>
          <Ask />
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
