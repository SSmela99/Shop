import React from "react";
import PropTypes from "prop-types";

const TabPanel = ({ children, value, index }) => {
  return (
    <>
      <div className="elo" style={{ minHeight: "auto" }}>
        {value === index && <h1>{children}</h1>}
      </div>
    </>
  );
};

TabPanel.propTypes = {
  children: PropTypes.any,
  value: PropTypes.any,
  index: PropTypes.number,
};

export default TabPanel;
