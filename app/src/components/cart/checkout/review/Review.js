import React from "react";
import PropTypes from "prop-types";

import { Box, Grid, Typography, Card, Button } from "@material-ui/core";

import clsx from "clsx";
import useStyles from "./styles";

const Review = ({ shippingData, summary }) => {
  const classes = useStyles();

  const EmptyCheckout = () => (
    <>
      <Typography>Brak danych</Typography>
    </>
  );

  return (
    <>
      <Box className={classes.margin} />
      <Box className={clsx(classes.center, classes.flexCenter)}>
        {shippingData.length === 0 ? (
          <EmptyCheckout />
        ) : (
          <Box className={classes.flex}>
            <Card className={classes.box}>
              <Typography variant="subtitle2" gutterBottom>
                Podsumowanie zamówienia
              </Typography>
              <Grid container justify="center">
                {shippingData.map((item, i) => {
                  return (
                    <>
                      <Grid item key={i} xs={12} sm={6}>
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          color="textSecondary"
                        >
                          {item[0]}: {item[1]}
                        </Typography>
                      </Grid>
                    </>
                  );
                })}
              </Grid>
              <hr />
              <Box className={classes.btnBox}>
                <Button color="primary" variant="contained">
                  Zapłać {summary} PLN
                </Button>
              </Box>
            </Card>
          </Box>
        )}
      </Box>
    </>
  );
};

Review.propTypes = {
  shippingData: PropTypes.any,
  summary: PropTypes.any,
};

export default Review;
