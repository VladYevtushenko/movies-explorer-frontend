import './AboutMe.css';
import photo from '../../../images/photo Small.jpeg';
import { Portfolio } from '../Portfolio/Portfolio';

export const AboutMe = () => {
    return (
        <section className='about-me' id='student'>
            <h2 className='about-me__title'>Студент</h2>
            <div className='about-me__container'>
                <div className='about_me__content'>
                    <h3 className='about-me__name'>Влад</h3>
                    <h4 className='about-me__prof'>Фронтенд-разработчик, 33 года</h4>
                    <p className='about-me__bio'>
                        Я родился в Алмате, живу в Сочи, закончил факультет управления бизнесом в London Business School. Я большой любитель электронной музыки, обожаю читать книги, а именно детективы. Ещё увлекаюсь бегом, катаюсь на лыжах, сноуборде, вэйкборде, сапе. Вот уже почти 10 месяцев как изучаю Front-end. С 2018 года я профессиональный отельер и работаю управляющим отеля в Сочи. Меня давно интересует мир программирования, и наконец я решился на то, чтобы полностью сменить сферу деятельности. 
                    </p>
                    <ul className='about-me__link-list'>
                        <li className='about-me__link-item'>
                            <a 
                                href='https://github.com/VladYevtushenko' 
                                className='about-me__link' 
                                target='_blank'
                                rel="noreferrer noopener"
                            >GitHub</a>
                        </li>
                        <li className='about-me__link-item'>
                            <a 
                                href='https://www.instagram.com/vlad_yevtushenko' 
                                className='about-me__link' 
                                target='_blank'
                                rel="noreferrer noopener"
                            >Instagram</a>
                        </li>
                    </ul>
                </div>
                <img className='about-me__photo' src={photo} alt='student' />
            </div>
            <Portfolio />
        </section>
    );
};