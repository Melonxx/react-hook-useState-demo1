import React, { Component } from "react";
import ReactDOM from "react-dom";
import Card from "./card";

import "./styles.css";

class App extends Component {
  render() {
    return <Card />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
