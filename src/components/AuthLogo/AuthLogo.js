import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLogo.css';
import logo from '../../images/logo.svg';

export const AuthLogo = () => {
    return (
        <Link to ='/' >
            <img className='auth-logo' src={logo} alt='logo' />
        </Link>
    );
};