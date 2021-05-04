import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Products,
  Navbar,
  Cart,
  ProductDetails,
  LoginRegister,
  Account,
} from "./components/Components";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [id, setId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  // const [cartItemsCount, setCartItemsCount] = useState(0);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    // setCartItemsCount(cartItems.reduce((acc, item) => acc + item.qty, 0));
    // console.log(cartItemsCount);
  };

  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const deleteItem = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const Loading = () => (
    <div className={classes.container}>
      <div className={classes.circle}></div>
      <div className={classes.circle}></div>
      <div className={classes.circle}></div>
    </div>
  );

  return (
    <>
      <Router>
        <Navbar cartItems={cartItems} />
        <Switch>
          <Route exact path="/">
            {isLoading ? (
              <Loading />
            ) : (
              <Products
                products={products}
                addToCart={addToCart}
                setId={setId}
                id={id}
              />
            )}
          </Route>
          <Route exact path="/cart">
            <Cart
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              deleteItem={deleteItem}
            />
          </Route>
          <Route exact path={`/product/:id`}>
            <ProductDetails id={id} setId={setId} addToCart={addToCart} />
          </Route>
          <Route exact path="/account">
            <Account loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
          <Route exact path="/account/(register|login)">
            <LoginRegister loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
