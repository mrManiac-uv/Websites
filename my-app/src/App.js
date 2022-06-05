import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/HomePage";
import Foot from "./Components/Foot";

export default function App() {
  localStorage.theme = "light";
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Foot />
    </Router>
  );
}
