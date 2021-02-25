import { useState } from "react";
import { Grid, TextField, makeStyles } from "@material-ui/core";
import EditingBoxOption from "../../components/common/SpeedDial";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const EditingBox = () => {
  const classes = useStyles();
  const [optionSelected, setOptionSelected] = useState("");
  const handleOptionSeleted = (val) => {
    setOptionSelected(val);
    alert(val);
  };
  return (
    <div className={classes.root}>
      <div style={{ display: "flex", width: "100%", position: "relative" }}>
        <div style={{ width: "10%" }}>
          <EditingBoxOption optionSelected={handleOptionSeleted} />
        </div>
        <div style={{ width: "90%", marginTop: "20px", height: "100%" }}>
          <TextField fullWidth />
        </div>
      </div>
    </div>
  );
};

export default EditingBox;
