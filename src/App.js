import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Product from "./component/Product/Product";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    );
  }
}
//hello its me

export default App;
