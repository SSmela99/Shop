import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tabs, Tab, AppBar, Typography } from "@material-ui/core";

import TabPanel from "./tabPanel/TabPanel";
import UpdatePanel from "./tabPanel/updatePanel/UpdatePanel";
import RemovePanel from "./tabPanel/removePanel/RemovePanel";
import AddPanel from "./tabPanel/addPanel/AddPanel";

const AdminPanel = ({ products, setProducts }) => {
  const [tabValue, setTabValue] = useState(0);
  const [selectValue, setSelectValue] = useState("");

  const handleTabs = (e, val) => {
    console.log(val);
    setTabValue(val);
  };

  return (
    <main>
      <AppBar position="static" color="transparent">
        <Typography
          variant="subtitle2"
          color="textSecondary"
          style={{ fontSize: "12px", margin: "10px 0" }}
          align="center"
        >
          Panel administracyjny zwraca obiekty z wysłanymi danymi. pamiętaj, nic
          w rzeczywistości nie zaktualizuje się w bazie danych. Zastosowane
          metody są takie same jakie podaje dokumentacja FAKESTOREAPI.
        </Typography>
        <Tabs value={tabValue} centered onChange={handleTabs}>
          <Tab label="Zaktualizuj" />
          <Tab label="Usuń" />
          <Tab label="Dodaj" />
        </Tabs>
      </AppBar>
      <TabPanel value={tabValue} index={0}>
        <UpdatePanel
          products={products}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <RemovePanel products={products} setProducts={setProducts} />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <AddPanel products={products} setProducts={setProducts} />
      </TabPanel>
    </main>
  );
};

AdminPanel.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func,
};

export default AdminPanel;
