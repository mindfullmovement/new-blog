import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import Icon from "../../../common/Icon";
import UserMenu from "./components/Menu";
import Button from "../../../common/Button";
import { UIContext } from "../../../context/UIContext";

const Header = ({ isScrolled }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [loggedIn, setLoggendIn] = useState(true);
  const { toggleTheme } = useContext(UIContext);
  return (
    <div
      className={` ${styles.header} ${
        isScrolled && styles["header--scrolled"]
      }`}
    >
      <div className={styles.header__container}>
        <div></div>
        <nav className={styles.header__nav}>
          {loggedIn ? (
            <>
              <button
                onClick={() => toggleTheme()}
                className={styles.header__button}
              >
                <Icon name={"dark_mode"} />
                {showMenu && <UserMenu />}
              </button>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={styles.header__button}
              >
                <Icon name={"person"} />
                {showMenu && <UserMenu />}
              </button>
            </>
          ) : (
            <div className={styles.button__container}>
              <button onClick className={styles.button__signup}>
                Sign up
              </button>
              <button className={styles.button__login}>Log in</button>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Header;
