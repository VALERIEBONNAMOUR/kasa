import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home/Home';
import App from "./App";
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Error from './pages/Error/Error';
import Apropos from "./pages/Apropos/Apropos";
import Lodging from "./pages/Lodging/Lodging";
import LodgingDetails from "./pages/Lodging/Lodging";



ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/apropos" element={<Apropos />} />
        <Route index element={<Home />} />
        <Route path="/logement/:id" element={<LodgingDetails />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>

  </Router>
)
