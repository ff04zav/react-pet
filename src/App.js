import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Management from "./pages/Management";
import News from "./pages/News";
import Home from "./pages/Home";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/management">
                Management
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/management">
            <Management name="Andrew" />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
