import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom'

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render((<BrowserRouter>
<App /></BrowserRouter>), rootElement);
