import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, "zdl_chunk", {
  value(n) {
    return Array.from(Array(Math.ceil(this.length / n)), (_, i) =>
      this.slice(i * n, i * n + n)
    );
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
