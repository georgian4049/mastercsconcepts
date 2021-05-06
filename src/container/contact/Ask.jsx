import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField, Button, CircularProgress } from "@material-ui/core";
import Header from "./Header";
import CustomSelectTextField from "../../components/common/CustomSelectTextField";
import { userType } from "../../utils/mock";
import Regex from "../../utils/Regex";
import { MESSAGE } from "../../state/actions/types";
import { postQuery } from "../../api/contact";

const Contact = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, name, email, username } = useSelector(
    (state) => state.authentication
  );
  const [state, setState] = useState({
    name: "",
    email: "",
    userType: "Reader",
    query: "",
  });

  useEffect(() => {
    if (isAuthenticated && username !== "test") {
      setState({ ...state, name, email });
    }
    /*eslint-disable-next-line*/
  }, [isAuthenticated]);

  const [error, setError] = useState({
    name: false,
    email: false,
    userType: false,
    query: false,
  });

  const [loader, setLoader] = useState(false);
  const handleEmailBlur = (e) => {
    if (!Regex.validEmail.test(state["email"])) {
      setError({
        ...error,
        email: true,
      });
    } else {
      setError({
        ...error,
        email: false,
      });
    }
  };

  const handleChange = (e) => {
    if (!e.target.value) {
      setError({ ...error, [e.target.name]: true });
    } else {
      setError({ ...error, [e.target.name]: false });
    }
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleUserType = (name, value) => {
    if (value) {
      setState({ ...state, [name]: value });
      setError({ ...error, [name]: false });
    } else {
      setError({ ...error, [name]: true });
    }
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setError({ ...error, [e.target.name]: true });
    } else {
      setError({ ...error, [e.target.name]: false });
    }
  };

  const postQueries = async () => {
    try {
      setLoader(true);
      await postQuery(state);
      dispatch({
        type: MESSAGE.SUCCESS,
        payload: "Thanks for your query! We will resolve it soon!",
      });
      setState({ ...state, query: "" });
    } catch (error) {
      setLoader(false);
      console.log(error);
      if (error.response?.status === 400) {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "You have already posted similar query",
        });
      } else {
        dispatch({
          type: MESSAGE.ERROR,
          payload: "Server Error! Please try again later",
        });
      }
    } finally {
      setLoader(false);
    }
  };

  const handleSubmit = () => {
    let errorExist = false;
    let missingValues = false;
    Object.keys(error).forEach((x) => {
      if (error[x]) {
        errorExist = true;
      }
    });
    Object.keys(state).forEach((x) => {
      if (!state[x]) {
        missingValues = true;
      }
    });
    if (errorExist) {
      dispatch({ type: MESSAGE["ERROR"], payload: "Please resolve errors!" });
      return;
    } else if (missingValues) {
      dispatch({ type: MESSAGE["ERROR"], payload: "Please fill all fields" });
      return;
    } else {
      postQueries();
    }
  };

  return (
    <div>
      <Header heading="Ask Us" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            margin="none"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={state["name"]}
            onChange={handleChange}
            error={error["name"]}
            helperText={error["name"] && "Please enter name"}
            onBlur={handleBlur}
            disabled={isAuthenticated && username !== "test"}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            margin="none"
            required
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            name="email"
            value={state["email"]}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            error={error["email"]}
            helperText={error["email"] && "Please enter correct email"}
            disabled={isAuthenticated && username !== "test"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <CustomSelectTextField
            variant="outlined"
            defaultValue="Reader"
            margin="none"
            required
            fullWidth
            type="text"
            id="userType"
            label="I am a"
            name="userType"
            value={state["userType"]}
            items={userType}
            handleChange={handleUserType}
            error={error["userType"]}
            helperText={error["name"] && "Please choose one option"}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            variant="outlined"
            margin="none"
            required
            fullWidth
            type="text"
            id="query"
            label="Query"
            name="query"
            value={state["query"]}
            multiline
            rows={6}
            onChange={handleChange}
            error={error["query"]}
            helperText={error["query"] && "Please enter your query"}
            onBlur={handleBlur}
          />
        </Grid>
      </Grid>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={loader}
          onClick={handleSubmit}
        >
          Ask
          {loader && (
            <>
              {" "}
              &nbsp; <CircularProgress
                style={{ color: "white" }}
                size={15}
              />{" "}
            </>
          )}
        </Button>
      </div>
      <br />
    </div>
  );
};

export default Contact;
