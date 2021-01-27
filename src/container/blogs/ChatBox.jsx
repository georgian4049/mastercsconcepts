import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { datetimeConverter } from "../../../functions/function";

const useStyles = makeStyles((theme) => ({
  messageContainer: {
    height: "250px",
    overflow: "auto",
    scrollBehavior: "smooth",
  },
  messageRow: {
    display: "grid",
    height: "30px",
    marginBottom: "20px",
  },
  yourMessage: {
    justifyContent: "end",
    gridTemplateColumns: "70%",
    marginLeft: "auto",
    marginRight: "10px",
  },
  receivedMessage: {
    justifyItems: "start",
    gridTemplateColumns: "70% ",
    marginLeft: "10px",
    marginRight: "10px",
  },
  yourMessageContent: {
    display: "flex",
    justifyItems: "end",
  },
  receivedMessageContent: {
    display: "flex",
    gridColumnGap: "5px",
  },
  yourMessageText: {
    padding: "9px 14px",
    fontSize: "1.0rem",
    marginBottom: "5px",
    background: "blue",
    color: "white",
    border: "1px solid",
    borderRadius: "14px 14px 0 14px",
  },
  receivedMessageText: {
    padding: "9px 14px",
    fontSize: "1.0rem",
    marginBottom: "5px",
    background: "#FCAF18",
    color: "white",
    border: "1px solid",
    borderRadius: "14px 14px 14px 0px",
  },
}));

export default function ChatBox({ isMyMessage, message }) {
  const classes = useStyles();

  return (
    <div className={classes.messageRow}>
      {isMyMessage ? (
        <div className={classes.yourMessage}>
          <div className={classes.yourMessageContent}>
            <div className={classes.yourMessageText}>
              {message.text + " - " + datetimeConverter(message.date)}
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.receivedMessage}>
          <div className={classes.receivedMessageContent}>
            <div className={classes.receivedMessageText}>
              {message.text + " - " + datetimeConverter(message.date)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
