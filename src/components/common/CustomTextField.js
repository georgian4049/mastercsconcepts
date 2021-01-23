import React, { useState } from "react";
import { TextField, FormHelperText } from "@material-ui/core";

export default function CustomTextField(props) {
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    props.handleChange(e.target.value, props.name);
    if (props.errorCheckFunctions) {
      if (props.errorCheckFunctions(e.target.value)) {
        props.handleChange(true, props.errorType);
        setError(true);
      } else {
        props.handleChange(false, props.errorType);
        setError(false);
      }
    }
  };
  return (
    <>
      <TextField
        type={props.type}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        multiline={props.multiline}
        rows={props.rows}
        placeholder={props.placeholder}
        label={props.label}
        name={props.name}
        onChange={handleChange}
        value={props.value}
        disabled={props.disabled}
        error={error || props.error}
        helperText={props.helperText}
      />
      {error || props.error ? (
        <FormHelperText error id="standard-weight-helper-text">
          {props.errorMessage}
        </FormHelperText>
      ) : (
        ""
      )}
    </>
  );
}
