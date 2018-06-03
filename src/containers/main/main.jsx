import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "../components/navbar";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;
