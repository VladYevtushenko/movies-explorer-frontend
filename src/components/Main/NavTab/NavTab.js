import './NavTab.css';

export const NavTab = () => {
    return (
        <nav className='navi'>
            <ul className='navi__list'>
                <li className='navi__item'>
                    <a className='navi__link' href='#about-project'>
                        О проекте
                    </a>
                </li>
                <li className='navi__item'>
                    <a className='navi__link' href='#about-project'>
                        Технологии
                    </a>
                </li>
                <li className='navi__item'>
                    <a className='navi__link' href='#about-project'>
                        Студент
                    </a>
                </li>
            </ul>
        </nav>
    );
};