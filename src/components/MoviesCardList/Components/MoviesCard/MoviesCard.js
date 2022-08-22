import { useContext } from 'react';
import { CurrentMoviesSaveContext } from '../../../../contexts/CurrentMoviesSaveContext';
import './MoviesCard.css';

export const MoviesCard = ({ movie, type, onClickMovieBtn }) => {

    const CurrentMoviesSave = useContext(CurrentMoviesSaveContext);
    const { nameRu, length, image } = movie;
    const movieData = CurrentMoviesSave.filter((el) => el.movieID === movie.id);
    const isSaved = movieData.lenght > 0;

    const transformMins = (minutes) => {
        const hours = Math.trunc(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours}ч ${mins}м` : `${mins}м`;
    };

    const movieLength = transformMins(length);
    const moviePoster = type === 'all' ? `https://api.nomoreparties.co/${image.url}` : movie.image;

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
            {type === 'all' ? (
                isSaved ? (
                    <button 
                        type='button'
                        className='movie__add-btn movie__add-btn_type_saved' 
                        onClick={() => onClickMovieBtn(movie, 'delete', movieData[0]._id)}
                    />
                    ) : (
                    <button 
                        type='button' 
                        className='movie__add-btn movie__add-btn_type_save' 
                        onClick={() => onClickMovieBtn(movie, 'save', null)}
                    />
                    )
                ) : (
                    <button 
                        type='button' 
                        className='movie__add-btn movie__add-btn_type_delete' 
                        onClick={() => onClickMovieBtn(movie._id)}
                    />
                )}   
                
            <div className='movie__info'>
                <figcaption className='movie__name'>
                    {nameRu}
                </figcaption>
                <p className='movie__duration'>{movieLength}</p>
            </div>
        </li>
    );
};