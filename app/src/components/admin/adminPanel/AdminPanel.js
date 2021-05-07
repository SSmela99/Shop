import React, { useState } from "react";
import PropTypes from "prop-types";

import { Tabs, Tab, AppBar } from "@material-ui/core";

import TabPanel from "./tabPanel/TabPanel";
import UpdatePanel from "./tabPanel/UpdatePanel";

const AdminPanel = ({ products }) => {
  const [value, setValue] = useState(0);

  const handleTabs = (e, val) => {
    console.log(val);
    setValue(val);
  };

  return (
    <main>
      <div>elo</div>
      <AppBar position="static" color="transparent">
        <Tabs value={value} centered onChange={handleTabs}>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UpdatePanel products={products} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item 3
      </TabPanel>
    </main>
  );
};

AdminPanel.propTypes = {
  products: PropTypes.array,
};

export default AdminPanel;
