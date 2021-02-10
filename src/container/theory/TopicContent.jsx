import { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { theoryData } from "../../utils/mock";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const TopicContent = (state) => {
  const classes = useStyles();
  const history = useHistory();
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log(history.location.pathname);
    const path = history.location.pathname.split("/");
    if (theoryData[path[1]]?.[path[2]]?.[path[3]]) {
      const { cardInfo } = theoryData[path[1]][path[2]][path[3]].find(
        (i) => i.cardInfo.id === path[4]
      );
      setContent(cardInfo);
    }
  }, []);
  return (
    <div>
      <div>
        <Button
          color="secondary"
          size="large"
          className={classes.button}
          startIcon={<ArrowBackIcon />}
          onClick={() => history.goBack()}
        >
          BACK
        </Button>
      </div>
      <div>
        <Typography variant="h4" align="center">
          {content.title}
        </Typography>
        <div style={{ padding: "10px" }}>
          {content &&
            content.data.content.map((data) =>
              data["type"] === "h5" || data["type"] === "h6" ? (
                <Typography
                  variant={data["type"]}
                  style={{ fontWeight: "bold" }}
                >
                  {data["content"]}
                </Typography>
              ) : data["type"] === "olnumber" ? (
                <ol>
                  {data.content.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ol>
              ) : data["type"] === "img" ? (
                <img
                  alt={data["alt"]}
                  src={data["src"]}
                  style={{ height: "50%", width: "50%", marginLeft: "25%" }}
                />
              ) : data["type"] === "p" ? (
                data["content"].map((x) =>
                  x["type"] === "text" ? (
                    <Typography
                      variant="body1"
                      component="span"
                      style={{ fontWeight: x["fontWeight"] }}
                    >
                      {x["content"]}{" "}
                    </Typography>
                  ) : x["type"] === "link" ? (
                    <Link to={x.url}>{x.content}</Link>
                  ) : (
                    ""
                  )
                )
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default TopicContent;
