import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import testPic from '../../../../images/test_pic.png';

export const MoviesCard = () => {
    const location = useLocation();
    const [added, setAdded] = useState();

    const handleAdd = () => {
        setAdded(!added);
    };

    const handleRemove = () => {
        setAdded(false);
    };

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
            {location.pathname !== '/saved-movies' 
                ? (<button 
                    type='button'
                    onClick={handleAdd}
                    className={`movie__add-btn movie__add-btn_type_save 
                        ${added ? 'movie__add-btn_type_saved' : ''}`}
                    />)
                    : (<button 
                        type='button' 
                        className='movie__add-btn movie__add-btn_type_delete' 
                        aria-label='delete'
                        onClick={handleRemove}
                    />)}
                
            <div className='movie__info'>
                <figcaption className='movie__name'>
                    33 слова о дизайне
                </figcaption>
                <p className='movie__duration'>1ч 17м</p>
            </div>
        </li>
    );
};