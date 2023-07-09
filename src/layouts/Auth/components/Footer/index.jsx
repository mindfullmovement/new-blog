import React from "react";
import styles from "./style.module.css";
import {
  Facebook,
  Youtube,
  Twitter,
  Strava,
  Instagram,
} from "../../../../assets/icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__left}>
          <Facebook width={"20px"} height={"20px"} />
          <Twitter width={"20px"} height={"20px"} />
          <Youtube width={"20px"} height={"20px"} />
          <Strava width={"20px"} height={"20px"} />
          <Instagram width={"20px"} height={"20px"} />
        </div>
        <div className={styles.footer__right}>
          Copyright © 2023 Blog. Powered by Ruud Juffermans
        </div>
      </div>
    </footer>
  );
};

export default Footer;
