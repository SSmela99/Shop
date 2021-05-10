import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AddressForm from "./addressForm/AddressForm";

import useStyles from "./styles";
import { Box, Typography, Card } from "@material-ui/core";

const Review = ({ loggedIn, cartItems, summary }) => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.margin} />
      <Box className={classes.center}>
        {loggedIn ? (
          cartItems.length !== 0 ? (
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                maxWidth: "700px",
                flexFlow: "wrap",
                margin: "0 auto",
                padding: "20px 0",
              }}
            >
              <AddressForm summary={summary} />
            </Card>
          ) : (
            <Box>
              <Typography>
                Twój koszyk jest pusty, <Link to="/">dodaj</Link>, coś do
                koszyka!
              </Typography>
            </Box>
          )
        ) : (
          <Box>
            <Typography variant="subtitle2">
              Musisz się <Link to="/account/login">zalogować</Link>, aby przejść
              dalej!
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

Review.propTypes = {
  loggedIn: PropTypes.bool,
  cartItems: PropTypes.array,
  summary: PropTypes.string,
};

export default Review;
