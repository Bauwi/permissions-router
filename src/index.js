import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import "./App.css";

import theme from "./style/theme";

import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import Loader from "./components/Loader/Loader";

const store = configureStore();

const logUser = () =>
  new Promise((resolve, reject) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      resolve(
        store.dispatch({
          type: "LOGIN",
          user
        })
      );
    }
    resolve();
    reject();
  });

const jsx = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);
// check if app has already been rendered to avoid useless re-rendering
let hasRendered = false;
const renderApp = async () => {
  await logUser();
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<Loader />, document.getElementById("root"));
renderApp();
