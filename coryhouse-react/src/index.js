import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

// function Hi() {
//     // debugger;
//     return <p>Hi.</p>;
// }

const store = configureStore();

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById("app"));