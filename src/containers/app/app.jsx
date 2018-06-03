import React, { Component } from "react";

import Home from "../../components/home";
import Main from "../main";

class App extends Component {
  render() {
    return (
      <div id="portfolio">
        <Home />
        <Main />
      </div>
    );
  }
}

export default App;
