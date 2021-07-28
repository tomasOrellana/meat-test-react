import React, { useState, useEffect } from "react";
import { Grid, Container } from "@material-ui/core";
//local imports
import Title from "components/title/title";
import SideBar from "components/sideBar/sideBar";
import CardConteiner from "components/cardConteiner/cardConteiner";
import useStyles from "styles/articles";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState({});
  const classes = useStyles();

  const fetchData = () => {
    fetch("https://5eed24da4cbc340016330f0d.mockapi.io/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
        console.log(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className={classes.root}>
      <Title text="Nuestros artículos" />

      <Grid container spacing={2}>
        <Grid item xs={12} md={3} className={classes.sideBar}>
          <SideBar
            setFetchedData={setFetchedData}
            fetchData={fetchData}
            isLoading={isLoading}
          />
        </Grid>
        <Grid item xs={12} md={9} className={classes.cardContainer}>
          <CardConteiner isLoading={isLoading} fetchedData={fetchedData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
