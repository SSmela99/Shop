import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
  IconButton,
  Box,
} from "@material-ui/core";
import BackspaceIcon from "@material-ui/icons/Backspace";

import useStyles from "./styles";

const CartItem = ({ cartItem, addToCart, removeFromCart, deleteItem }) => {
  const classes = useStyles();

  const itemSummary = (cartItem.qty * cartItem.price).toFixed(2);

  return (
    <>
      <Container>
        <Card className={classes.root}>
          <CardMedia
            image={cartItem.image}
            title={cartItem.title}
            className={classes.image}
          />
          <Box className={classes.box}>
            <CardContent style={{ paddingRight: 0 }}>
              <Typography variant="subtitle2">{cartItem.title}</Typography>
              <Typography variant="subtitle2">{cartItem.price} PLN</Typography>
            </CardContent>
            <div className={classes.grow} />
            <CardContent className={classes.totalPrize}>
              <Typography>{itemSummary} PLN</Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button
                variant="contained"
                style={{ minWidth: "40px" }}
                onClick={() => addToCart(cartItem)}
                className={classes.cartButton}
              >
                +
              </Button>
              <span>{cartItem.qty}</span>
              <Button
                variant="contained"
                style={{ minWidth: "40px" }}
                className={classes.cartButton}
                onClick={() => removeFromCart(cartItem)}
              >
                -
              </Button>
              <IconButton
                onClick={() => deleteItem(cartItem)}
                className={classes.deleteBtn}
              >
                <BackspaceIcon />
              </IconButton>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default CartItem;
