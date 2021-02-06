import React from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import { data } from "../../utils/mock";

function Clearance() {
  return (
    <>
      <Grid container spacing={1}>
        {data.map((i) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card items={i["cardInfo"]} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
export default Clearance;
