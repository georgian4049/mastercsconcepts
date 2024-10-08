import { Typography, Box } from "@material-ui/core";
import React from "react";

const NoContent = () => {
  return (
    <Box
      top={150}
      left={0}
      bottom={0}
      right={0}
      position="fixed"
      display="flex"
      alignItems="center"
      justifyContent="center"
      style={{ marginLeft: "-35px" }}
    >
      <Typography align="center">
        No Content Here. Please contribute, Thanks! :)
      </Typography>
    </Box>
  );
};

export default NoContent;
