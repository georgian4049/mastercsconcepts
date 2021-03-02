import { Typography } from "@material-ui/core";

const WrongPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h1">404!</Typography>
      <Typography variant="subtitle1" color="secondary">
        Either you tried opening wrong link or the page you are trying to access
        is deleted
      </Typography>
      <Typography variant="subtitle2" color="primary">
        No worries! You can still route yourself to correct destination using
        links from header
      </Typography>
    </div>
  );
};

export default WrongPage;
