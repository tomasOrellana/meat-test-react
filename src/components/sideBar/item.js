import React from "react";
import { motion } from "framer-motion";
import { Box, Typography, CircularProgress } from "@material-ui/core";
// local import
import arrow from "images/arrow.svg";
import appearAnim from "./animation";
import useStyles from "./styles";

const Item = ({ title, id, selected, onClick, isLoading }) => {
  const classes = useStyles();
  let isSelected = false;
  const click = () => {
    onClick(id);
  };

  if (id === selected) isSelected = true;
  else isSelected = false;
  return (
    <Box className={classes.item} onClick={click}>
      <Typography
        component="h5"
        variant="h5"
        className={classes.text}
        style={{ color: isSelected ? "#D8AD3D" : "#3F454A" }}
      >
        {title}
      </Typography>
      <motion.div
        variants={appearAnim}
        initial="hidden"
        animate={isSelected ? "visible" : "hidden"}
      >
        {isSelected &&
          (isLoading ? (
            <CircularProgress size={24} />
          ) : (
            <img src={arrow} alt={`${arrow}-icon`} className={classes.icon} />
          ))}
      </motion.div>
    </Box>
  );
};

export default Item;
