import React, { useState } from "react";
import styles from "./style.module.css";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Menu from "./Menu";
import Content from "./Content";

const MainLayout = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const toggleMenuCollapse = () => {
    setMenuCollapse(!menuCollapse);
  };
  return (
    <div className={styles.main__wrapper}>
      <div
        className={`${styles.main__grid}
          ${menuCollapse && styles["main__grid--close"]}
        `}
      >
        <div className={styles.main__navigation}>
          <div className={styles.panel__wrapper}>
            <div className={styles.panel}>
              <Navigation />
            </div>
          </div>
        </div>
        <div className={styles.main__menu}>
          <div className={styles.panel__wrapper}>
            <div className={styles.panel}>
              <Menu toggleMenu={toggleMenuCollapse} isOpen={menuCollapse} />
            </div>
          </div>
        </div>
        <div className={styles.main__content}>
          <div className={styles.panel__wrapper}>
            <div className={styles.panel}>
              <Content>
                <Outlet />
              </Content>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
