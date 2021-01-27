import React from "react";
import {
  Accordion,
  AccordionActions,
  Button,
  Divider,
  TextField,
  makeStyles,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import ChatBox from "./ChatBox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: "bold",
  },
  messageContainer: {
    maxHeight: "250px",
    overflow: "auto",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  column: {
    flexBasis: "33.33%",
  },
  unreadMessage: {
    color: "#00a152",
    // backgroundColor: "#00e676",
  },
  form: {
    width: "100%",
  },
  queryField: {
    width: "95%",
  },
  querySubmit: {
    width: "5%",
    marginTop: "10px",
  },
  pending: theme.chip.pending,
  granted: theme.chip.granted,
  declined: theme.chip.declined,
  topDivider: { marginBottom: "15px" },
}));

export default function DetailedAccordion({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <Divider className={classes.topDivider} />
        <div className={classes.messageContainer}>
          {data.messages.map((item) => (
            <ChatBox
              key={item._id}
              //   isMyMessage={item.sender === user.email}
              message={item}
            />
          ))}
        </div>
        <Divider />
        <AccordionActions>
          <form
            className={classes.form}
            //   onSubmit={(e) => sendQuery(e)}
          >
            <TextField
              id="standard-basic"
              label="Write your query"
              fullWidth
              className={classes.queryField}
              //   onChange={(e) => setQuery(e.target.value)}
              //   value={query}
            />
            <Button
              size="small"
              color="primary"
              //   onClick={(e) => sendQuery(e)}
              className={classes.querySubmit}
            >
              <SendIcon />
            </Button>
          </form>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
