import React from "react";
// local import
import useStyles from "./styles";

const SocialIcon = ({ source, color }) => {
  const classes = useStyles(color);
  return (
    <div className={classes.root}>
      <div className={classes.background} />
      <img src={source} alt={`${source}-icon`} />
    </div>
  );
};

export default SocialIcon;
