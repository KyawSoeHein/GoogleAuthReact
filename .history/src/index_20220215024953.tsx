import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./View/Dashboard";
import ShoppingList from "./View/ShoppingList";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <Dashboard /> */}
    <Routes>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/shopping">
        <ShoppingList />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Routes>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
