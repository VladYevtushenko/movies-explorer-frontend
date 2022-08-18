import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationAuth.css';

export const NavigationAuth = () => {
    return (
        <nav className='auth-menu'>
            <NavLink to='/signup' className='auth-menu__link'>
                Регистрация
            </NavLink>
            <NavLink to='/signin' className='auth-menu__link btn'>
                Войти
            </NavLink>
        </nav>
    );
};