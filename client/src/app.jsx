import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { store } from "./store/index";
import { Provider } from "react-redux";
import Dashboard from "./components/Dashboard";

function App(props) {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default hot(App);
