import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Container,
} from "@material-ui/core";

import useStyles from "./styles";

const ProductDetails = ({ addToCart }) => {
  const classes = useStyles();
  const location = useLocation();

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let path = location.pathname;
  let id = parseInt(path.replace(/\/$/, "").split("/").splice(-1, 1));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => setProduct(data));
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  const Loading = () => (
    <div className={classes.loading}>
      <div className={classes.loadingCircle}></div>
      <div className={classes.loadingCircle}></div>
      <div className={classes.loadingCircle}></div>
    </div>
  );

  const DetailedProduct = () => (
    <>
      <Container>
        <Card className={classes.root}>
          <CardContent style={{ display: "flex" }}>
            <CardMedia
              image={product.image}
              title={product.title}
              // style={{ width: "200px", height: "200px" }}
              className={classes.image}
            />
            <div>
              <Typography className={classes.text} variant="h4" gutterBottom>
                {product.title}
              </Typography>
              <Typography className={classes.text} variant="h6" gutterBottom>
                {product.price} PLN
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
                className={(classes.text, classes.desc)}
              >
                {product.description}
              </Typography>
              <CardActions>
                <div style={{ flexGrow: 1 }} />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => addToCart(product)}
                >
                  Dodaj do koszyka
                </Button>
              </CardActions>
            </div>
          </CardContent>
        </Card>
      </Container>
    </>
  );

  return (
    <main>
      <div className={classes.margin} />
      {isLoading ? <Loading /> : <DetailedProduct />}
    </main>
  );
};

ProductDetails.propTypes = {
  setId: PropTypes.func,
  addToCart: PropTypes.func,
};

export default ProductDetails;
