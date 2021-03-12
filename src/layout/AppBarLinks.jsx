import { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import TopicSelector from "../components/common/TopicSelector";
import { courseList } from "../utils/mock";

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
        >
          <TopicSelector
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
          <TopicSelector
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
