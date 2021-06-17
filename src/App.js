import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Page from "./components/Page";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <Page />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
