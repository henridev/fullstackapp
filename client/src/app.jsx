import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import { store } from "./store/index";
import { Provider } from "react-redux";
import Dashboard from "./components/Dashboard";
import TaskDetail from "./components/TaskDetail";
import { Router, Route, Redirect } from "react-router-dom";
import { history } from "./store/history";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import User from "./components/User";

const RouteGuard = (Component) => ({ match }) => {
  return !store.getState().session.authenticated ? (
    <Redirect to="/login" />
  ) : (
    <Component match={match} />
  );
};

function App(props) {
  return (
    <Router history={history}>
      <Provider store={store}>
        <Navigation />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" render={RouteGuard(Dashboard)} />
        <Route exact path="/user" render={RouteGuard(User)} />
        <Route exact path="/task/:id" render={RouteGuard(TaskDetail)} />
        {/* <Route path="/" render={RouteGuard()} /> */}
      </Provider>
    </Router>
  );
}

export default hot(App);
