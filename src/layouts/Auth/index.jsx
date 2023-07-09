import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./style.module.css";
import Footer from "./components/Footer";

const AuthLayout = () => {
  return (
    <div className={styles.auth__background}>
      <div className={styles.auth__center}>
        <div className={styles.auth__card}>
          <div className={styles.auth__wrap}>
            <Outlet context={{}} />
            <div className={styles.auth__foot}>
              <NavLink to="/register">Register</NavLink>
              <NavLink to="/reset">Reset</NavLink>
              <NavLink to="/login">Login</NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
