import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter  } from "react-router-dom"; // for used not to page load//

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <App />
    
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);