import React from "react";
import { Link } from "react-router-dom";

import { CssBaseline, Typography, Box } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import ShopIcon from "../../assets/shopIcon.png";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <footer className={classes.root}>
        <Box className={classes.container}>
          <Box className={classes.leftFooter}>
            <img src={ShopIcon} className={classes.shopIconImg} />
            <Box>
              <Typography variant="subtitle2">Sklep internetowy</Typography>
              <Typography variant="subtitle2">Projekt</Typography>
            </Box>
          </Box>
          <div className={classes.grow} />
          <Box className={classes.rightFooter}>
            <Box
              component={Link}
              to={{ pathname: "https://github.com/SSmela99" }}
              target="_blank"
              className={classes.linkBox}
            >
              <GitHub className={classes.imgLink} />
              <Typography variant="subtitle2">github</Typography>
            </Box>
            <Box
              component={Link}
              to={{
                pathname:
                  "https://www.linkedin.com/in/sebastian-smela-36a776201/",
              }}
              target="_blank"
              className={classes.linkBox}
            >
              <LinkedIn className={classes.imgLink} />
              <Typography variant="subtitle2">linkedIn</Typography>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
