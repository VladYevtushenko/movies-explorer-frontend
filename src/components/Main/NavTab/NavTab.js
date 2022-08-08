import './NavTab.css';

export const NavTab = () => {
    return (
        <nav className='navi'>
            <ul className='navi__list'>
                <li className='navi__item'>
                    <a className='navi__link' href='#about'>
                        О проекте
                    </a>
                </li>
                <li className='navi__item'>
                    <a className='navi__link' href='#techs'>
                        Технологии
                    </a>
                </li>
                <li className='navi__item'>
                    <a className='navi__link' href='#student'>
                        Студент
                    </a>
                </li>
            </ul>
        </nav>
    );
};