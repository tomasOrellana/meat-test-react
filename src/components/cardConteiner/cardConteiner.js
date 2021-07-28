import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
// local import
import Card from "components/card/card";

const SideBar = ({ isLoading, fetchedData }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoading === false) {
      setTimeout(() => {
        setIsReady(true);
      }, 500);
    }
  }, [isLoading]);

  if (!isReady) return null;
  return (
    <Grid container>
      {fetchedData.map(({ title, content, image, url, id }) => (
        <Grid item xs={12} md={4} key={id}>
          <Card title={title} text={content} image={image} url={url} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SideBar;
