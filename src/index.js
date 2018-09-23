import React from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import "./App.css";

import theme from "./style/theme";

import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import Loader from "./components/Loader/Loader";

const store = configureStore();

injectGlobal`
body {
  padding: 0;
  margin: 0;
  background: #333;
  font-family: Helvetica;
  overflow: hidden;
}
h1 {
  color: white;
  text-transform: uppercase;
  font-size: 2rem;
  font-style: italic;
  font-weight: 900;
  padding: 1rem;
}
`;

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
