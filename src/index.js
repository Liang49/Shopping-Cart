import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
