import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  Snackbar,
  Typography,
} from "@material-ui/core";
//local imports
import Title from "components/title/title";
import Form from "components/form/form";
import useStyles from "styles/contact";

const Contact = () => {
  const classes = useStyles();
  const [isFetching, setIsFetching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const fetchData = () => {
    fetch("https://5eed24da4cbc340016330f0d.mockapi.io/api/newsletter", {
      method: "post",
      body: {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsFetching(false);
        setIsSubmited(true);
        console.log(data);
      });
  };

  const handleChange = (name, e) => {
    setValues({ ...values, [name]: e.value });
  };

  const clicked = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleSubmit = () => {
    clicked();
    if (
      values.firstname === "" ||
      values.lastname === "" ||
      values.email === "" ||
      values.phone === ""
    ) {
      return null;
    }

    setIsFetching(true);
    fetchData();
    console.log(values);
  };

  return (
    <Container className={classes.root}>
      <Box className={classes.body}>
        <Title text="contáctanos" />

        <Form
          values={values}
          handleChange={handleChange}
          isSubmitting={isSubmitting}
          isFetching={isFetching}
          isSubmited={isSubmited}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={() => handleSubmit()}
        disabled={isFetching ? true : isSubmited ? true : false}
      >
        {isSubmited ? (
          <Typography>Enviado!</Typography>
        ) : (
          <Typography>Enviar</Typography>
        )}
      </Button>

      <Snackbar open={isSubmited} className={classes.snackbar}>
        <Typography>¡Muchas gracias por tu mensaje! :)</Typography>
      </Snackbar>
    </Container>
  );
};

export default Contact;
