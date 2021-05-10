import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import axios from "axios";

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
  const [noData, setNoData] = useState(false);

  let path = location.pathname;
  let id = parseInt(path.replace(/\/$/, "").split("/").splice(-1, 1));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        if (result.data === null) {
          setIsLoading(false);
          setNoData(true);
        } else {
          setIsLoading(false);
          setProduct(result.data);
        }
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchData();
  }, []);

  useEffect(async () => {
    const result = await axios.get(`https://fakestoreapi.com/products/28`);

    console.log(result.data);
    // console.log(data);
    // console.log(result);
  }, []);

  const NoItemFound = () => (
    <Typography variant="h2">
      Przedmiot nie został znaleziony w bazie
    </Typography>
  );

  const DetailedProduct = () => (
    <>
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
    </>
  );

  return (
    <main>
      <div className={classes.margin} />
      <div className={classes.center}>
        {noData ? (
          <NoItemFound />
        ) : isLoading ? (
          <Loading />
        ) : (
          <DetailedProduct />
        )}
      </div>
    </main>
  );
};

ProductDetails.propTypes = {
  setId: PropTypes.func,
  addToCart: PropTypes.func,
};

export default ProductDetails;
