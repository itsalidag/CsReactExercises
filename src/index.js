import { StrictMode } from "react";
import ReactDOM from "react-dom";
import counters from "./components/counter";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <App />
  </div>,

  rootElement
);
