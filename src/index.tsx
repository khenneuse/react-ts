import * as React from "react";
import { Component } from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

const API_KEY = 'AIzaSyCbIO-Q9YAilLrCym_0pA4poa4M4uBW4T8';

class App extends Component<{}, {}> {
  render() {
    return (
      <Hello compiler="TypeScript" framework="React" />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);