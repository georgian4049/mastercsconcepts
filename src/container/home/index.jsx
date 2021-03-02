import { Typography } from "@material-ui/core";

const Index = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Typography variant="h5">Welcome to Home Page!</Typography>
      <Typography variant="subtitle1" color="secondary">
        I am currently working on this page, Something interesting is going to
        come
      </Typography>
      <Typography variant="subtitle2" color="primary">
        Howerever for now you can use links from header to route to your
        destination.. Happy Learning!
      </Typography>
    </div>
  );
};

export default Index;
