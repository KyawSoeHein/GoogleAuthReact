import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Dashboard from "./View/Dashboard";
import ShoppingList from "./View/ShoppingList";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./View/Login";

ReactDOM.render(
  <React.StrictMode>
    {/* <Routes>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/shopping">
        <ShoppingList />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Routes> */}
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about">
            <Dashboard />
          </Route>
          <Route path="/users">
            <ShoppingList />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
