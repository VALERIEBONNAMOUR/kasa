import logo from '../../assets/logofooter.png'
import React from "react";
import './Footer.css';

function Footer() {
  return (
    <nav className="footer">
      <img src={logo} alt="Kasa" className="footer-logo" />
      <div className="footer-rights">© 2020 Kasa. All rights reserved</div>
    </nav>
  )
}

export default Footer