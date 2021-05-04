import React from "react";

import useStyles from "./styles";

const Loading = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.margin} />
      <div className={classes.center}>
        <div className={classes.container}>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
          <div className={classes.circle}></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
