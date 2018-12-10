import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";

import "./styles.css";

const reducer = (state, action) => {
  if (state === undefined) {
    return 0;
  } else {
    if (action.type === "add") {
      return state + action.payload;
    } else {
      return state;
    }
  }
};
const store = createStore(reducer);
function render() {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <App
      value={store.getState()}
      onAdd1={() => store.dispatch({ type: "add", payload: 1 })}
      onAdd2={() => store.dispatch({ type: "add", payload: 2 })}
      onAddIfOdd={() => {
        if (store.getState() % 2 !== 0) {
          store.dispatch({ type: "add", payload: 1 });
        }
      }}
      onAddAsync={() => {
        setTimeout(() => {
          store.dispatch({ type: "add", payload: 1 });
        }, 2000);
      }}
    />,
    rootElement
  );
}
render();
store.subscribe(render);
