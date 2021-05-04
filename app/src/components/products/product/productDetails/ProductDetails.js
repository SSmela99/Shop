import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import Loading from "../../../extras/loading/Loading";
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

  const DetailedProduct = () => (
    <>
      <div className={classes.margin} />
      <div className={classes.center}>
        <Container>
          <Card className={classes.root} style={{ marginBottom: "30px" }}>
            <CardContent className={classes.content}>
              <CardMedia
                image={product.image}
                title={product.title}
                className={classes.image}
              />
              <div>
                <Typography className={classes.text} variant="h4">
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
      </div>
    </>
  );

  return <main>{isLoading ? <Loading /> : <DetailedProduct />}</main>;
};

ProductDetails.propTypes = {
  setId: PropTypes.func,
  addToCart: PropTypes.func,
};

export default ProductDetails;
