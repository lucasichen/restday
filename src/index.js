import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import React from 'react';

import "./index.css";
import App from "./App";

ReactDOM.render(
    <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
    </HashRouter>,
    document.getElementById("root")
);
