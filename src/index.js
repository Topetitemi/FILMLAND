// import { render } from "@testing-library/react";
// import React from 'react';
// import ReactDOM from 'react-dom';


// import App from './App.js'

// ReactDOM.render (<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


