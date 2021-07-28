import React, { useState } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
// local import
import useStyles from "./styles";

const Card = ({ title, text, image, url }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const classes = useStyles(isLoaded, isHover);
  return (
    <div
      className={classes.root}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        src={image}
        className={classes.image}
        alt={title}
        onLoad={() => setIsLoaded(true)}
      />
      <Box className={classes.body}>
        <Typography component="h5" variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography component="p" variant="inherit" className={classes.text}>
          {text}
        </Typography>
      </Box>
      {isHover && (
        <Button
          className={classes.button}
          target="_blank"
          href={url}
          rel="noreferrer"
        >
          Ver mas
        </Button>
      )}
      {!isLoaded && (
        <Skeleton
          variant="rect"
          width={270}
          height={366}
          className={classes.skeleton}
        />
      )}
    </div>
  );
};

export default Card;
