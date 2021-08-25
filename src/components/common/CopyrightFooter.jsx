import React from "react";
import { Link, Typography, Box } from "@material-ui/core";

const CopyrightFooter = () => {
  return (
    <Box mt={4} width="100%" style={{ position: "fixed", bottom: 10 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          mastercsconcepts
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default CopyrightFooter;
