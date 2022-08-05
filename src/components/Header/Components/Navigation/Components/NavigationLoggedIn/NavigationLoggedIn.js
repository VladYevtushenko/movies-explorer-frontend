import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLoggedIn.css';
import accIcon from '../../../../../../images/account-icon.svg';

export const NavigationLoggedIn = () => {
    return (
        <>
        <nav className='navi-logged__menu-bar'>
            <div className='navi-logged__movies'>
                <NavLink to='/movies' className='navi-logged__item'>
                    Фильмы
                </NavLink>
                <NavLink to='/saved-movies' className='navi-logged__item'>
                    Сохраненные фильмы
                </NavLink>
            </div>
            <div className='navi-logged__account'>
                <NavLink to='/profile' className='navi-logged__account_link'>
                    Аккаунт
                </NavLink>
                <div className='navi-logged__account_icon-box'>
                    <img 
                        src={accIcon} 
                        alt='profile icon'
                        className='navi-logged__account_icon' 
                    />
                </div>
            </div>
        </nav>
        </>
    );
};
