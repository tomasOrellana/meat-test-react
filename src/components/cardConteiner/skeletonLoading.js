import React from "react";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const SkeletonLoading = () => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Skeleton
          variant="rect"
          width={280}
          height={330}
          style={{ borderRadius: "10px" }}
        />
      </Grid>
      <Grid item xs={4}>
        <Skeleton
          variant="rect"
          width={280}
          height={330}
          style={{ borderRadius: "10px" }}
        />
      </Grid>
      <Grid item xs={4}>
        <Skeleton
          variant="rect"
          width={280}
          height={330}
          style={{ borderRadius: "10px" }}
        />
      </Grid>
    </Grid>
  );
};

export default SkeletonLoading;
