import { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Popover from "../components/common/Popover";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    // border: `1px solid ${theme.palette.divider}`,
    flexWrap: "wrap",
    color: "black",
  },
  divider: {
    margin: theme.spacing(1, 0.5),
  },
}));

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    margin: theme.spacing(0.5),
    border: "none",
    "&:not(:first-child)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-child": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

const courseList = {
  core: [
    { name: "OS", displayName: "Operating System" },
    { name: "DS", displayName: "Data Sructures" },
    { name: "DAA", displayName: "Design and Analysis of Algorithms" },
  ],
  adv: [
    { name: "ML", displayName: "Machine Learning" },
    { name: "AI", displayName: "Artificial Intelligence" },
  ],
};

export default function CustomizedDividers() {
  const classes = useStyles();
  const [alignment, setAlignment] = useState("left");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [state, setState] = useState({
    selectedCourseType: "",
  });
  const handleCourseType = (val) => {
    setState({ ...state, selectedCourseType: val });
  };

  return (
    <div>
      <Paper elevation={0} className={classes.paper}>
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          style={{ color: "black" }}
          aria-label="text alignment"
        >
          <Popover
            title="Core Computer Science"
            list={courseList["core"]}
            name="core"
            handleChange={handleCourseType}
          />
          <Divider
            flexItem
            orientation="vertical"
            className={classes.divider}
          />
          <Popover
            title="Advanced Areas"
            name="adv"
            list={courseList["adv"]}
            handleChange={handleCourseType}
          />
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
