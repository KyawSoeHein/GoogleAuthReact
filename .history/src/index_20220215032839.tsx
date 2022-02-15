import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Dashboard from "./View/Dashboard";
import reportWebVitals from "./reportWebVitals";
import ShoppingList from "./View/ShoppingList";

ReactDOM.render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
