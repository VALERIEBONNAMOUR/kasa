import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home/Home';
import App from "./App";
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Error from './pages/Error/Error';
import Apropos from "./pages/Apropos/Apropos";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/apropos" element={<Apropos />} />
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>

  </Router>
)
