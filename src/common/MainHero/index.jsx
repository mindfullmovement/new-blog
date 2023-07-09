import React from "react";
import styles from "./style.module.css";

const MainHero = ({ color, title, children }) => {
  return (
    <div className={styles.hero__wrapper} style={{ backgroundColor: color }}>
      <div className={styles.hero__textbox}>
        <h1 className={styles.hero__title}>{title}</h1>
      </div>
      <div className={styles.content__wrapper}>
        <div className={styles.hero__bar}>
          <div className={styles.bar__left}></div>
          <div className={styles.bar__right}></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainHero;
