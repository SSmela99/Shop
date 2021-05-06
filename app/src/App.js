import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Products,
  Navbar,
  Cart,
  ProductDetails,
  LoginRegister,
  Account,
  Footer,
} from "./components/Components";
import { Loading } from "./components/Extras";

const cartFromSessionStorage = JSON.parse(
  sessionStorage.getItem("cart") || "[]"
);

const userFromSessionStorage = JSON.parse(
  sessionStorage.getItem("user") || "[]"
);

const isLoggedFromSessionStorage = JSON.parse(
  sessionStorage.getItem("logged") || false
);

const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState(cartFromSessionStorage);
  const [id, setId] = useState("");
  const [loggedIn, setLoggedIn] = useState(isLoggedFromSessionStorage);

  //registration states //
  const [regUsername, setRegUsername] = useState("");
  const [regFirstname, setRegFirstname] = useState("");
  const [regLastname, setRegLastname] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  //login states //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(userFromSessionStorage);
  const [errMessage, setErrMessage] = useState(false);

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

  window.onbeforeunload = () => {
    window.scrollTo(0, 0);
  };

  const logout = () => {
    setPassword("");
    setUsername("");
    setLoggedIn(false);
    setUser([]);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("logged");
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

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <>
      <Router>
        <Navbar cartItems={cartItems} user={user} loggedIn={loggedIn} />
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
            <Account
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              logout={logout}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              user={user}
            />
          </Route>
          <Route exact path="/account/(register|login)">
            <LoginRegister
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              regUsername={regUsername}
              setRegUsername={setRegUsername}
              regFirstname={regFirstname}
              setRegFirstname={setRegFirstname}
              regLastname={regLastname}
              setRegLastname={setRegLastname}
              regEmail={regEmail}
              setRegEmail={setRegEmail}
              regPassword={regPassword}
              setRegPassword={setRegPassword}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              user={user}
              setUser={setUser}
              logout={logout}
              errMessage={errMessage}
              setErrMessage={setErrMessage}
            />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
