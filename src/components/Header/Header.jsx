import React from "react";
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';





const Header = () => {

    const location = useLocation();
    return (
        <nav className="header-style">
            <img src={logo} alt="Logo Kasa" className="logo-kasa" />
            <div className="nav">
                <Link to="/" className={location.pathname === '/'? 'nav__links__link active' : 'nav__links__link' }
                > Accueil</Link>
                <Link to="/apropos" className={location.pathname === '/apropos'? 'nav__links__link active' : 'nav__links__link'}
                > A propos</Link>
            </div>
        </nav>
    );
};

export default Header;