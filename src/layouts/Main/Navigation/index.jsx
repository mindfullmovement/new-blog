import React from "react";
import styles from "./style.module.css";
import { NavLink } from "react-router-dom";
import Icon from "../../../common/Icon";

const Navigation = () => {
  return (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? `${styles.navlink__item} ${styles["navlink__item--active"]}`
            : styles.navlink__item
        }
      >
        <Icon name={"home"} />
        <span className={styles.navlink__text}>Home</span>
      </NavLink>
      <NavLink
        to={"/search"}
        className={({ isActive }) =>
          isActive
            ? `${styles.navlink__item} ${styles["navlink__item--active"]}`
            : styles.navlink__item
        }
      >
        <Icon name={"search"} />
        <span className={styles.navlink__text}>Search</span>
      </NavLink>
    </>
  );
};

export default Navigation;
