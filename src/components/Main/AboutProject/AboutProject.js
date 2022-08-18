import './AboutProject.css';

export const AboutProject = () => {
    return (
        <section className='about-project' id='about'>
            <div className='about-project__container'>
                <h2 className='title'>О проекте</h2>
                <ul className='table'>
                    <li className='table__item'>
                        <h3 className='table__item-title'>
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className='table__item-text'>
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                        </p>
                    </li>
                    <li className='table__item'>
                        <h3 className='table__item-title'>
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className='table__item-text'>
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                        </p>
                    </li>
                </ul>
                <div className='time-line'>
                    <div className='time-line__item'>
                        <p className='time-line__week-one'>
                            1 неделя
                        </p>
                        <p className='time-line__phase'>Back-end</p>
                    </div>
                    <div className='time-line__item time-line__item_front'>
                        <p className='time-line__rest'>
                            4 неделя
                        </p>
                        <p className='time-line__phase'>Front-end</p>
                    </div>
                </div>
            </div>
        </section>
    );
};