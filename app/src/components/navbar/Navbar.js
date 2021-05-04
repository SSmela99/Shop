import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import {
  AppBar,
  Toolbar,
  Typography,
  Badge,
  IconButton,
} from "@material-ui/core";
import { ShoppingCart, AccountBox } from "@material-ui/icons";

import useStyles from "./styles";
import Icon from "../../assets/shopIcon.png";

const Navbar = ({ cartItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar className={classes.headerContainer}>
        <Toolbar style={{ transition: ".5s" }}>
          <Typography component={Link} to="/" className={classes.title}>
            <img src={Icon} alt="Shop Icon" />
            <Typography>Sklep internetowy</Typography>
          </Typography>
          <div className={classes.grow} />
          {!location.pathname.includes("account") && (
            <IconButton component={Link} to="/account">
              <AccountBox />
            </IconButton>
          )}
          {!location.pathname.includes("cart") && (
            <IconButton component={Link} to="/cart">
              <Badge color="secondary" badgeContent={cartItems.length}>
                <ShoppingCart />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

Navbar.propTypes = {
  cartItems: PropTypes.array,
};

export default Navbar;
