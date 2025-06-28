import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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

        <Routes>
          <Route path="/management" element={<Management name="Andrew" />} />
          <Route path="/News" element={<News />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
