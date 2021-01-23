/* eslint-disable no-use-before-define */
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function AsynchronousChipTextField(props) {
  const classes = useStyles();
  const handleChange = (e, val) => {
    props.handleChange(val, props.name);
  };
  return (
    <div className={classes.root}>
      <Autocomplete
        multiple={props.multiple}
        id={props.id}
        fullWidth
        options={props.options}
        getOptionLabel={(option) => option.displayName}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label={props.label}
            placeholder={props.placeholder}
          />
        )}
      />
    </div>
  );
}
