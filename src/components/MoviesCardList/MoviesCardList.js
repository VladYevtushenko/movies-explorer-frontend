import React from 'react';
import './MoviesCardList.css';
import { MoviesCard } from './Components/MoviesCard/MoviesCard';

export const MoviesCardList = () => {
    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__list'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button 
                type='button' 
                className='movies-card-list__more-btn'
            >Ещё</button>
        </section>
    );
};