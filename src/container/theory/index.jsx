import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Card from "./Card";
import Chat from "./Chat";
import { ClearanceData } from "../../utils/mock";

function Clearance() {
  alert("a");
  const [openChat, setOpenChat] = useState(false);
  const handleChat = () => {
    setOpenChat(!openChat);
  };
  return (
    <>
      <Grid container spacing={1}>
        {ClearanceData.map((i) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card items={i} />
          </Grid>
        ))}
      </Grid>
      {openChat ? <Chat handleChat={handleChat} /> : ""}
    </>
  );
}
export default Clearance;
