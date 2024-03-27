import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

{/**
 * This is the root component of the app which is rendered in the index.html
 * App.js is rendered inside this root component
 * App.js is wrapped with BrowserRouter to support routing functionalities
 */}
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
