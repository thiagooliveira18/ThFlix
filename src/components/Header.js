import React from "react";

import NetflixLogo from '../assets/netflix-logo.png';
import Perfil from '../assets/perfil.png';

import './Header.css'

export default ({ black }) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src={NetflixLogo} alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src={Perfil} alt="Usuário" />
                </a>
            </div>
        </header>
    );
}