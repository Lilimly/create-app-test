import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export const Header = () => {


    return (
        <header className="home-header">
            <img src={logo} className="home-header__logo" alt="logo" />
            <p>
                Edit and save to reload.
            </p>
            <Link to="/second" className="home-header__link--mint">
                Go to second page
            </Link>
            <a
                className="home-header__link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    );
};
