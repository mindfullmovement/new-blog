import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Content = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      const scrollPosition = Number(scrollContainer.scrollTop);

      if (scrollPosition > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className={styles.content__wrapper}>
      <div
        ref={scrollContainerRef}
        className={` ${styles.content__scroll} ${
          isLocked && styles["scroll__content--locked"]
        }`}
      >
        <Header isScrolled={isScrolled} />
        <div className={styles.scroll__content}>
          <div className={styles.content__container}>
            <div className={styles.content__item}>{children}</div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
