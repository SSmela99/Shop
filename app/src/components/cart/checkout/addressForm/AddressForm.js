import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Button, Grid, Typography, TextField, Box } from "@material-ui/core";

const AddressForm = ({ setShippingData }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");

  const methods = useForm();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      imię: firstname,
      nazwisko: lastname,
      adres: address,
      email: email,
      miasto: city,
      postcode: zip,
    };
    setShippingData(Object.entries(data));

    history.push("/checkout/review");
  };

  return (
    <>
      <Typography variant="h6">Dane wysyłki</Typography>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <Grid container align="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                align="center"
                required
                name="firstName"
                label="Imię"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="lastName"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                label="Nazwisko"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="address"
                label="Ulica"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="email"
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="city"
                label="Miasto"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                name="zip"
                label="kod pocztowy"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button variant="contained" color="primary" type="submit">
              Dalej
            </Button>
          </Box>
        </form>
      </FormProvider>
    </>
  );
};

AddressForm.propTypes = {
  setShippingData: PropTypes.func,
};

export default AddressForm;
