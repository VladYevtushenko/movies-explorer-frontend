import { React } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Navigation } from './Components/Navigation/Navigation';
import logo from '../../images/logo.svg';

export const Header = ({ loggedIn }) => {
    return (
        <header className='header header_main'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt='logo' />
            </Link>
            <Navigation loggedIn={loggedIn}/>
        </header>
    );
};