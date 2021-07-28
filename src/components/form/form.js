import React from "react";
import { Grid } from "@material-ui/core";
// local import
import Input from "components/input/input";
import useStyles from "./styles";

const Form = ({
  values,
  handleChange,
  isSubmitting,
  isFetching,
  isSubmited,
}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} className={classes.inputContainer}>
        <Input
          label="nombre"
          name="firstname"
          value={values.firstname}
          handleChange={handleChange}
          submitting={isSubmitting}
          disabled={isFetching ? true : isSubmited ? true : false}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.inputContainer}>
        <Input
          label="apellido"
          name="lastname"
          value={values.lastname}
          handleChange={handleChange}
          submitting={isSubmitting}
          disabled={isFetching ? true : isSubmited ? true : false}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.inputContainer}>
        <Input
          label="mail"
          name="email"
          value={values.email}
          handleChange={handleChange}
          submitting={isSubmitting}
          disabled={isFetching ? true : isSubmited ? true : false}
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.inputContainer}>
        <Input
          label="teléfono"
          name="phone"
          value={values.phone}
          handleChange={handleChange}
          submitting={isSubmitting}
          disabled={isFetching ? true : isSubmited ? true : false}
        />
      </Grid>
    </Grid>
  );
};

export default Form;
