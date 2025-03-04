import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home/Home';
import App from "./App";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import './index.css';
import Footer from './components/Footer/Footer';
import Error from './pages/Error/Error';



ReactDOM.createRoot(document.getElementById("root")).render( 
  <Router>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Error />} /> 
        {/* <Route path="/apropos" element={<Apropos />} /> */}
      </Route>
    </Routes>
  </Router>
)

