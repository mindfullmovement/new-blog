import React from "react";
import Router from "./router";
import UIContextProvider from "./context/UIContext";
import NotificationContextProvider from "./context/NotificationContext";

const App = () => {
  return (
    <UIContextProvider>
      <NotificationContextProvider>
        <Router />
      </NotificationContextProvider>
    </UIContextProvider>
  );
};

export default App;
