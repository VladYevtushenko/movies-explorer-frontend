import './Footer.css';

export const Footer = () => {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className='footer__info'>
                <p className='footer__year'>&copy; 2022. Влад Евтушенко</p>
                <nav className='footer__links'>
                    <ul className='footer__links-list'>
                        <li className='footer__links-item'>
                            <a 
                                className='footer__link' 
                                href='https://practicum.yandex.ru/' 
                                target='_blank'
                                rel="noreferrer noopener"
                            >
                                Яндекс.Практикум
                            </a>
                        </li>
                        <li className='footer__links-item'>
                            <a 
                                className='footer__link' 
                                href='https://github.com/yandex-praktikum' 
                                target='_blank'
                                rel="noreferrer noopener"
                            >
                                Github
                            </a>
                        </li>
                        <li className='footer__links-item'>
                            <a 
                                className='footer__link' 
                                href='https://www.facebook.com/yandex.practicum/' 
                                target='_blank'
                                rel="noreferrer noopener"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};