import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import store from "./ReduxStore/store";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);