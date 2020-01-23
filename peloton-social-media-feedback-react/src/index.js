import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ReduxReducer from "./components/ReduxReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
document.body.style.backgroundColor = "#E4E7EB";

const rootElement = document.getElementById("root");
const store = createStore(ReduxReducer);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
