import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import useStyles from "./styles";

import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@material-ui/core";

const AddPanel = ({ products, setProducts }) => {
  const classes = useStyles();

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  //inputs states
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [err, setErr] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: id * 1,
      title: title,
      price: (price * 1).toFixed(2) * 1,
      description: description,
      image: image,
      category: category,
    };

    const existingId = products.some((element) => element.id === id * 1);

    if (existingId) {
      setErr(true);
    } else {
      const addProduct = async () => {
        await axios.post("https://fakestoreapi.com/products", {
          newItem,
        });

        setProducts([...products, newItem]);
        console.log(existingId);
      };

      setErr(false);
      addProduct();
      setId("");
      setTitle("");
      setPrice("");
      setDescription("");
      setImage("");
    }
  };

  const changeSelectValue = (e) => {
    setCategory(e.target.value);
  };

  useEffect(async () => {
    const result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );

    setCategories(result.data);
  }, []);

  return (
    <Box className={classes.form}>
      <Typography variant="h5" style={{ margin: "0" }}>
        Dodaj produkt
      </Typography>
      <form onSubmit={onSubmit} className={classes.flex}>
        <TextField
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="Id"
          label="Id"
          variant="outlined"
          required
          type="number"
          className={classes.input}
        />
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          label="Title"
          variant="outlined"
          required
          className={classes.input}
        />

        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          label="Price"
          variant="outlined"
          required
          type="number"
          className={classes.input}
        />

        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          label="Description"
          variant="outlined"
          required
          className={classes.input}
        />

        <TextField
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="url"
          label="Image"
          variant="outlined"
          required
          className={classes.input}
        />
        <Select
          value={category}
          variant="outlined"
          onChange={changeSelectValue}
          label="Category"
          required
          className={classes.input}
        >
          {categories.map((category, id) => {
            return (
              <MenuItem value={category} key={id}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
        <Button
          style={{ margin: "10px 0" }}
          color="primary"
          variant="contained"
          type="submit"
        >
          submit
        </Button>
      </form>
      {err && (
        <Typography variant="subtitle2" className={classes.error}>
          Podane id znajduje się już w bazie!
        </Typography>
      )}
    </Box>
  );
};

AddPanel.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default AddPanel;
