import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DogsPage from "./components/DogsPage";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dogsPage/:dogName" component={DogsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
