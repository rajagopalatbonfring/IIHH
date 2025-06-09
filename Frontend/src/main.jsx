import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "../dist/output.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App style={{ backgroundImage: 'url(src/assets/imageno2.jpg)' }}/>
    </BrowserRouter>
  </React.StrictMode>
);
