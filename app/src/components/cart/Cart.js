import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid, Typography, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./cartItem/CartItem";
import useStyles from "./styles";

const Cart = ({ cartItems, addToCart, removeFromCart, deleteItem }) => {
  const classes = useStyles();
  const [summary, setSummary] = useState([]);

  const getSummary = () => {
    const arr = [];
    if (cartItems.length === 0) {
      setSummary(0);
    } else {
      cartItems.map((item) => {
        arr.push(item.price * item.qty);
        setSummary(arr.reduce((a, b) => a + b).toFixed(2));
      });
    }
  };

  useEffect(() => {
    console.log(cartItems);
    getSummary();
  }, [cartItems]);

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      Koszyk jest pusty, przejdź do sklepu, aby &nbsp;
      <Link to="/">dodać przedmioty do koszyka</Link>
    </Typography>
  );

  const FilledCart = () => (
    <Container>
      <main>
        <Typography variant="h3" align="center" gutterBottom>
          Cart
        </Typography>
        <Grid container justify="center" spacing={4}>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                cartItem={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                deleteItem={deleteItem}
              />
            );
          })}
        </Grid>
        <Typography
          variant="h6"
          align="right"
          style={{ margin: "20px 10px 0 0" }}
        >
          Do zapłacenia: {summary} PLN
        </Typography>
      </main>
    </Container>
  );

  return (
    <>
      <div className={classes.margin} />
      <div>{cartItems.length === 0 ? <EmptyCart /> : <FilledCart />}</div>
    </>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  deleteItem: PropTypes.func,
};

export default Cart;
