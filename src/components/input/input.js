import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TextField, Typography } from "@material-ui/core";
// local import
import animation from "./animation";
import useStyles from "./styles";

const Input = ({
  label,
  name,
  disabled,
  value,
  handleChange,
  type = "text",
  submitting = false,
}) => {
  const classes = useStyles();
  const [shouldShake, SetShouldShake] = useState(false);
  useEffect(() => {
    if (value === "" && submitting) {
      SetShouldShake(true);
      setTimeout(() => {
        SetShouldShake(false);
      }, 500);
    }
    // eslint-disable-next-line
  }, [submitting]);
  return (
    <motion.div
      animate={shouldShake ? "shake" : "noShake"}
      variants={animation}
      className={classes.root}
    >
      <Typography variant="h4" component="h4" className={classes.title}>
        {label}
      </Typography>
      <TextField
        id={name}
        value={value}
        disabled={disabled}
        type={type}
        variant="outlined"
        onChange={(e) => handleChange(name, e.target)}
        InputProps={{
          classes: {
            root: classes.inputForm,
            focused: classes.cssFocused,
            notchedOutline: classes.notchedOutline,
            input: classes.input,
          },
        }}
        className={classes.inputBox}
      />
    </motion.div>
  );
};

export default Input;
