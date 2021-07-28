import React from "react";
import { Grid } from "@material-ui/core";
// local import
import SocialIcon from "components/socialIcon/socialIcon";
import facebookIcon from "images/facebook-icon.svg";
import instagramIcon from "images/instagram-icon.svg";
import youtubeIcon from "images/youtube-icon.svg";
import useStyles from "styles/header";

const SocialContainer = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={3} className={classes.iconContainer}>
      <SocialIcon source={facebookIcon} color="#009CD9" />
      <SocialIcon source={instagramIcon} color="#B72C2C" />
      <SocialIcon source={youtubeIcon} color="#D8AD3D" />
    </Grid>
  );
};

export default SocialContainer;
