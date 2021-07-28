import React from "react";
import { Typography } from "@material-ui/core";
// local import
import headingShape from "images/heading-shape.png";
import useStyles from "./styles";

const Title = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h2" variant="h2" className={classes.title}>
        {text}
      </Typography>
      <img
        src={headingShape}
        alt="hero-shape"
        className={classes.headingShape}
      />
    </div>
  );
};

export default Title;
