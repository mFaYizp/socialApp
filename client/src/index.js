import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dotenv from "dotenv";

import reducers from "./reducers";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

dotenv.config();
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <GoogleOAuthProvider clientId="890604501444-pte5o98ugts067k3o5evfpgp5l347108.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
