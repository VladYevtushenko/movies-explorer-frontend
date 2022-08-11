import { React } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { Navigation } from './Components/Navigation/Navigation';
import logo from '../../images/logo.svg';

export const Header = ({ loggedIn }) => {
    const page = useLocation();

    return (
        <header 
            className={`header
                ${page.pathname === '/' ? 'header_movie' : 'header'}
            `}
        >
            <Link to='/'>
                <img className='header__logo' src={logo} alt='logo' />
            </Link>
            <Navigation loggedIn={loggedIn}/>
        </header>
    );
};