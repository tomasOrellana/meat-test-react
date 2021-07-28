import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
// local imports
import SocialContainer from "components/socialContainer/socialContainer";
import heroImage from "images/hero-background.jpg";
import heroShape from "images/hero-shape.png";
import useStyles from "styles/header";

const Header = () => {
  const classes = useStyles(heroImage);
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={9} className={classes.logo}>
          Logo
        </Grid>
        <SocialContainer />
      </Grid>
      <Box className={classes.titleContainer}>
        <Typography component="h1" variant="h1" className={classes.title}>
          El secreto de tu cocina
        </Typography>
        <img src={heroShape} alt="hero-shape" className={classes.heroShape} />
      </Box>
    </Box>
  );
};

export default Header;
