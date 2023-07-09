import React, { createContext, useEffect, useState } from "react";

export const UIContext = createContext();

const UIContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [color, setColor] = useState("red");
  const [search, setSearch] = useState(false);
  const [drawer, setDrawer] = useState(false);

  let rootClassList = document.documentElement.classList;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  useEffect(() => {
    if (localStorage) {
      const theme = localStorage.getItem("theme");
      if (theme) {
        setTheme(theme);
      }

      rootClassList.add(`${color}-color`);
      const storedColor = localStorage.getItem("color");
      if (storedColor) {
        setColor("RED");
      }
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      rootClassList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      rootClassList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    rootClassList.remove(`red-color`);
    rootClassList.remove(`blue-color`);
    rootClassList.remove(`green-color`);
    rootClassList.remove(`purple-color`);
    rootClassList.add(`${color}-color`);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    if (drawer) {
      document.body.classList.add("body-lock");
    }

    return () => document.body.classList.remove("body-lock");
  }, [drawer]);

  return (
    <UIContext.Provider
      value={{
        theme,
        color,
        setColor,
        setTheme,
        search,
        drawer,
        toggleTheme,
        toggleDrawer,
        toggleSearch,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
