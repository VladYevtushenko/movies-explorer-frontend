import React, { useState } from 'react';
// import { useContext } from 'react';
// import { CurrentMoviesSaveContext } from '../../../../contexts/CurrentMoviesSaveContext';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

export const MoviesCard = ({ movie, type }) => {
    const location = useLocation();

    // const CurrentMoviesSave = useContext(CurrentMoviesSaveContext);
    const { nameRu, duration, image } = movie;
    // const movieData = CurrentMoviesSave.filter((el) => el.movieID === movie.id);

    const transformMins = (minutes) => {
        const hours = Math.trunc(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours}ч ${mins}м` : `${mins}м`;
    };

    const movieLength = transformMins(duration);
    const moviePoster = type === 'all' ? `https://api.nomoreparties.co/${image.url}` : movie.image;

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
                href={movie.trailerLink}
                target='blank'
            >
                <img 
                    className='movie__poster'
                    src={moviePoster}
                    alt={nameRu}
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
                    {nameRu}
                </figcaption>
                <p className='movie__duration'>{movieLength}</p>
            </div>
        </li>
    );
};