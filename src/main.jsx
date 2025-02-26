import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home/Home'
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </Router>
)

