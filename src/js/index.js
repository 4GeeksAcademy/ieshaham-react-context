//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Router from './component/Router.jsx'
import Home from './component/home.jsx'

//render your react application
ReactDOM.render(<Router />, document.querySelector("#app"));