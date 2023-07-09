import React from "react";
import styles from "./style.module.css";
import Icon from "../../../common/Icon";
import { NavLink } from "react-router-dom";

const MenuItem = ({ closed, icon, children, big, link }) => {
  return (
    <NavLink to={`/${link}`}>
      <div className={styles.item}>
        <Icon name={icon} color="grey" size={"200%"} weight={"900"}></Icon>
        <div
          className={`${styles.item__content} ${
            big && styles["item__content--big"]
          } ${closed && styles["item__content--closed"]}`}
        >
          {children}
        </div>
      </div>
    </NavLink>
  );
};

export default MenuItem;
