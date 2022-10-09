import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/app.css";
import "./assets/styles/custom.css";
import "./assets/styles/plugins.min.css";


import App from './App';


ReactDOM.render(
 
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  document.getElementById("root")
);


