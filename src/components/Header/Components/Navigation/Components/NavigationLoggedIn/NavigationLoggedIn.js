import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationLoggedIn.css';
import accIcon from '../../../../../../images/accIcon_black.svg';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';

export const NavigationLoggedIn = () => {
    const [opened, setOpened] = useState(true);

    const onOpenMenu = () => {
        setOpened(false);
    };

    const onCloseMenu = () => {
        setOpened(true);
    };

    return (
        <>
        {opened 
            ? (<div className='burger-btn' onClick={onOpenMenu}></div>)
            : (<BurgerMenu onCloseMenu={onCloseMenu} />)
        }
        <nav className='navi-logged__menu-bar'>
            <div className='navi-logged__links'>
                <NavLink 
                    to='/movies' 
                    className={({ isActive }) => 
                        isActive 
                        ? 'navi-logged__item active'
                        : 'navi-logged__item' }
                >
                    Фильмы
                </NavLink>
                <NavLink 
                    to='/saved-movies' 
                    className={({ isActive }) => 
                        isActive 
                        ? 'navi-logged__item active'
                        : 'navi-logged__item' }
                >
                    Сохраненные фильмы
                </NavLink>
            </div>
            <div className='navi-logged__account'>
                <NavLink 
                    to='/profile' className='navi-logged__account_link'>
                    Аккаунт
                </NavLink>
                <img 
                    src={accIcon} 
                    alt='profile icon'
                    className='navi-logged__account_icon' 
                />
            </div>
        </nav>
        </>
    );
};
