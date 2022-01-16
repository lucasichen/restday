import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react';

import "./index.css";
import App from "./App";

ReactDOM.render(
    <BrowserRouter  basename={window.location.pathname || ''}>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
