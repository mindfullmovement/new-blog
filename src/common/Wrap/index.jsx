import React from "react";
import styles from "./style.module.css";

const Col = ({ min = "10px", max, flex, children }) => {
  return (
    <div style={{ margin: "auto", minWidth: min, maxWidth: max, flex: flex }}>
      {children}
    </div>
  );
};

const Row = ({ children }) => {
  return <div className={styles.row}>{children}</div>;
};

export { Row, Col };
