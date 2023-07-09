import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import Icon from "../../../../../common/Icon";

const UserMenu = () => {
  return (
    <div className={`${styles.menu__wrapper} ${styles["menu--open"]}`}>
      <ul className={styles.menu__list}>
        <li>
          <Link to={"/"} className={styles.menu__item}>
            <span className={styles.item__text}>Account</span>
            <Icon name="account_circle" />
          </Link>
        </li>
        <li>
          <Link to={"/search"} className={styles.menu__item}>
            <span className={styles.item__text}>Profile</span>
            <Icon name="person" />
          </Link>
        </li>
        <li>
          <Link to={"/settings"} className={styles.menu__item}>
            <span className={styles.item__text}>Settings</span>
            <Icon name="settings" />
          </Link>
        </li>
        <li>
          <Link to={"/login"} className={styles.menu__item}>
            <span className={styles.item__text}>Log out</span>
            <Icon name="logout" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
