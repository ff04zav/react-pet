import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Management from "./components/Management";
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

        {/* A <Switch> looks through its children <Route>s and
			  renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/management">
            <Management name="Andrew" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Home">
      <h2>React pet application</h2>
      <p>Click 'Management' menu item to test functionality</p>
    </div>
  );
}
