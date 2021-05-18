import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import {
  Select,
  MenuItem,
  Box,
  Typography,
  TextField,
  TextareaAutosize,
} from "@material-ui/core";
import useStyles from "./styles";

const UpdatePanel = ({ products, selectValue, setSelectValue }) => {
  const classes = useStyles();

  //update inputs states
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // update update refs
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const [categories, setCategories] = useState([]);

  const updateSelectValue = (e) => {
    console.log(e.target.value);
    setSelectValue(e.target.value);
    setId();
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
  };

  const updateSelectCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const product = {
      id: parseInt(idRef.current.value),
      title: titleRef.current.value,
      price: (priceRef.current.value * 1).toFixed(2) * 1,
      description: descriptionRef.current.value,
      category: categoryRef.current.outerText,
      image: selectValue.image,
    };

    console.log(product);

    const updateProduct = async () => {
      axios.put(`https://fakestoreapi.com/products/${product.id - 1}`, product);
      console.log(products[product.id - 1]);
      products[product.id - 1] = product;
    };

    updateProduct();
  };

  useEffect(async () => {
    const result = await axios("https://fakestoreapi.com/products/categories");

    setCategories(result.data);
  }, []);

  return (
    <Box className={classes.form}>
      <Typography variant="h5" style={{ margin: "0" }}>
        Zaktualizuj produkt
      </Typography>
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle1" style={{ marginRight: "10px" }}>
          Wybierz produkt:
        </Typography>
        <Select
          value={selectValue}
          displayEmpty
          onChange={updateSelectValue}
          style={{ minWidth: "200px", maxWidth: "370px" }}
        >
          {products.map((product) => {
            return (
              <MenuItem value={product} key={product.id}>
                {product.title}
              </MenuItem>
            );
          })}
        </Select>
      </Box>

      {selectValue && (
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "500px",
          }}
        >
          <TextField
            ref={idRef}
            onChange={(e) => setId(e.target.value)}
            value={id || selectValue.id}
            disabled
            label="id"
            variant="outlined"
            gutterBottom
          />
          <Typography gutterBottom>
            id: {id === "" ? selectValue.id : id}
          </Typography>
          <TextField
            ref={titleRef}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder={selectValue.title}
            label="title"
            variant="outlined"
          />

          <Typography gutterBottom>
            title: {title === "" ? selectValue.title : title}
          </Typography>

          <TextField
            ref={priceRef}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder={selectValue.price}
            label="price"
            variant="outlined"
          />
          <Typography gutterBottom>
            price: {price === "" ? selectValue.price : price}
          </Typography>

          <TextareaAutosize
            ref={descriptionRef}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            style={{ resize: "none", height: "100px" }}
            label="description"
            variant="outlined"
            placeholder={selectValue.description}
          />
          <Typography gutterBottom>
            description:{" "}
            {description === "" ? selectValue.description : description}
          </Typography>
          <Select
            value={category || selectValue.category}
            ref={categoryRef}
            onChange={updateSelectCategory}
            variant="outlined"
          >
            {categories.map((category) => {
              return (
                <MenuItem
                  value={category || selectValue.category}
                  // defaultValue={selectValue.category}
                  key={category}
                >
                  {category}
                </MenuItem>
              );
            })}
          </Select>
          <button type="submit">submit</button>
        </form>
      )}
    </Box>
  );
};

UpdatePanel.propTypes = {
  products: PropTypes.array,
  selectValue: PropTypes.any,
  setSelectValue: PropTypes.any,
};

export default UpdatePanel;
