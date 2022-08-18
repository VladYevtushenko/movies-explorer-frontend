import './Portfolio.css';

export const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__list-item portfolio__list-item_bordered'>
                    <a className='portfolio__link' href='https://vladyevtushenko.github.io/how-to-learn/' target='blank'>
                        <p className='portfolio__link-name'>Статичный сайт</p>
                        <p className='portfolio__icon'>↗</p>
                    </a>
                </li>
                <li className='portfolio__list-item portfolio__list-item_bordered'>
                    <a className='portfolio__link' href='https://vladyevtushenko.github.io/russian-travel/index.html' target='blank'>
                        <p className='portfolio__link-name'>Адаптивный сайт</p>
                        <p className='portfolio__icon'>↗</p>
                    </a>
                </li>
                <li className='portfolio__list-item'>
                    <a className='portfolio__link' href='https://mesto.by.vlad.nomorepartiesxyz.ru' target='blank'>
                        <p className='portfolio__link-name'>Одностраничное приложение</p>
                        <p className='portfolio__icon'>↗</p>
                    </a>
                </li>
            </ul>
        </section>
    );
};