import React from "react";
import { makeStyles, Chip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
import { CamelCaseToString } from "../../functions/function";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 275,
    minWidth: 275,
    margin: theme.spacing(1),
  },
  header: {
    display: "flex",
    "&>*": {
      margin: theme.spacing(0.5),
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
  chip: {
    marginLeft: "auto",
    "&>*": {
      color: "#fff",
    },
  },
  inReview: {
    backgroundColor: "#0460a9",
  },
  pending: {
    backgroundColor: "#0460a9",
  },
  rejected: {
    backgroundColor: "#ff3d00",
  },
  approved: {
    backgroundColor: "#4caf50",
  },
  reApply: { color: "#000000" },
  notApplicable: { color: "#000000" },
}));
export default function Cards({ items, handleChat }) {
  const classes = useStyles();
  const {
    // eslint-disable-next-line
    name,
    title,
    status,
    processStartedOn,
    processCompletedOn,
    assignee,
  } = items;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div className={classes.header}>
          <Typography className={classes.title} gutterBottom>
            {title}
          </Typography>
          <div className={classes.chip}>
            <Chip
              label={CamelCaseToString(status)}
              className={classes[status]}
            />
          </div>
        </div>
        <br />
        <Typography variant="body2">
          {`Process Started on :- ${processStartedOn}\n`}
        </Typography>
        <Typography variant="body2">
          {`Process Completed on :- ${processCompletedOn}`}
        </Typography>
        <Typography variant="body2">{`Assigned To :- ${assignee}`}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Upload">
          <ChatIcon onClick={handleChat} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
