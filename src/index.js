import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyles from "./style/GloablStyles";
import configureStore from "./redux/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById("root")
);
