import { NavLink } from "react-router-dom";
import './BurgerMenu.css'
import accIcon from '../../../../../../../images/account-icon.svg';

export const BurgerMenu = ({ onCloseMenu }) => {
    return (
        <section className='menu'>
            <button className='menu__close-btn' onClick={onCloseMenu}></button>
            <nav className='menu__container'>
                <div className='menu__list'>
                    <NavLink to='/' 
                        className={({ isActive }) => 
                            isActive 
                                ? 'menu__link menu__link_active'
                                : 'menu__link'
                        }
                        onClick={onCloseMenu}
                    >
                        Главная
                    </NavLink>
                    <NavLink to='/movies' 
                        className={({ isActive }) => 
                            isActive 
                                ? 'menu__link menu__link_active'
                                : 'menu__link'
                        }
                        onClick={onCloseMenu}
                    >
                        Фильмы
                    </NavLink>
                    <NavLink to='/saved-movies' 
                        className={({ isActive }) => 
                            isActive 
                                ? 'menu__link menu__link_active'
                                : 'menu__link'
                        }
                        onClick={onCloseMenu}
                    >
                        Сохраненые фильмы
                    </NavLink>
                </div>
                <div className='menu__account-box'>
                    <NavLink to='/profile' 
                        className='menu__link menu__link_account'
                        onClick={onCloseMenu}
                    >
                        Аккаунт 
                    </NavLink>
                    <div className='menu__account_icon-box'>
                        <img 
                            src={accIcon} 
                            alt='profile icon'
                            className='menu__account-icon' 
                        />
                    </div>
                </div>
            </nav>
        </section>
    );
};