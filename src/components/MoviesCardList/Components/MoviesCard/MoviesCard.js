import React from 'react';
import './MoviesCard.css';
import testPic from '../../../../images/test_pic.png';

export const MoviesCard = ({add, added}) => {
    // const cardAddBtn = (`${isAdded && 'movie__add-btn_type_save'}`);

    return (
        <li className='movie'>
            <a 
                className='trailer__link'
                href='https://www.youtube.com/watch?v=iudeJyaOxss&ab_channel=%D0%9E%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B0BBE'
                target='blank'
            >
                <img 
                    className='movie__poster'
                    src={testPic}
                    alt='movie-poster'
                />
            </a>
            {!added 
                ? (<button 
                    type='button'
                    className={`movie__add-btn movie__add-btn_type_save 
                        ${add ? 'movie__add-btn_type_saved' : ''}`}
                    ></button>)
                    : (<button type='button' className='movie__add-btn movie__add-btn_type_delete'></button>)}
                
            <div className='movie__info'>
                <figcaption className='movie__name'>
                    33 слова о дизайне
                </figcaption>
                <p className='movie__duration'>1ч 17м</p>
            </div>
        </li>
    );
};