import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";

import data from "./subdivions.json";

import {
  InputLabel,
  Select,
  MenuItem,
  //   Button,
  Grid,
  Typography,
} from "@material-ui/core";

const AddressForm = () => {
  const methods = useForm();

  const [shippingCountries, setShippingCountries] = useState([]);
  // const [shippingCountry, setShippingCountry] = useState("");
  // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  // const [shippingSubdivision, setShippingSubdivision] = useState("");

  const fetchShippingCountries = async () => {
    setShippingCountries(data);
    console.log(shippingCountries);
  };

  useEffect(() => {
    fetchShippingCountries();

    console.log(shippingCountries);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Typography variant="h6">Dane wysyłki</Typography>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={3} align="center">
            <FormInput align="center" required name="firstName" label="Imię" />
            <FormInput required name="lastName" label="Nazwisko" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="email" />
            <FormInput required name="city" label="Miasto" />
            <FormInput required name="zip" label="kod pocztowy" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Kraj</InputLabel>
              <Select value="">
                <MenuItem>Select</MenuItem>;
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel>Województwo</InputLabel>
              <Select value="">
                <MenuItem>Select me</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
      <button onClick={() => console.log(shippingCountries.AD)}>klik</button>
    </>
  );
};

export default AddressForm;
