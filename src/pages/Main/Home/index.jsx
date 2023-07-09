import React from "react";
import styles from "./style.module.css";
import MainHero from "../../../common/MainHero";

const ColoredPanelsDisplay = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "white",
    "olive",
    "orange",
    "aquamarine",
    "firebrick",
    "darkseagreen",
    "indigo",
    "lightgreen",
    "navy",
  ];

  const renderPanels = () => {
    return colors.map((color, index) => {
      const style = {
        backgroundColor: color,
      };

      return <div key={index} className={styles.panel} style={style}></div>;
    });
  };

  return <div className={styles.panel__container}>{renderPanels()}</div>;
};

const Home = () => {
  return (
    <div>
      <MainHero color="#e76666" title="Home">
        <ColoredPanelsDisplay />
      </MainHero>
    </div>
  );
};

export default Home;
