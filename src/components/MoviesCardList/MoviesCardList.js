import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { MoviesCard } from './Components/MoviesCard/MoviesCard';
import { More } from './Components/More/More';
import {
    VP_WIDTH_1280,
    VP_WIDTH_768,
    VP_WIDTH_420,
    ITEMS_PER_WIDTH_1280,
    ITEMS_PER_WIDTH_768,
    ITEMS_PER_WIDTH_420,
    ADD_3_TO_LIST,
    ADD_2_TO_LIST,
} from '../../consts/consts.js';

export const MoviesCardList = ({ arrayMovie, type, onClickMovieBtn }) => {
    const [counter, setCounter] = useState();
    const [moreCard, setMoreCard] = useState();

    const defineCardAmount = (viewWidth) => {
    
        if (viewWidth >= VP_WIDTH_1280) {
            setCounter(ITEMS_PER_WIDTH_1280);
            return setMoreCard(ADD_3_TO_LIST);
        } else if (viewWidth >= VP_WIDTH_420 && viewWidth <= VP_WIDTH_768) {
            setCounter(ITEMS_PER_WIDTH_768);
            return setMoreCard(ADD_2_TO_LIST);
        } else setCounter(ITEMS_PER_WIDTH_420);
        return setMoreCard(ADD_2_TO_LIST);
    };

    useEffect(() => {
        const viewWidth = window.innerWidth;
        defineCardAmount(viewWidth);
    }, []);

    const useCounter = () => setCounter((...initial) => Number(initial) + moreCard);

    useEffect(() => {
        const setTimeOut = (evt) => setTimeout(defineCardAmount(evt), 2000);
        window.addEventListener('resize', (evt) => 
            setTimeOut(evt.currentTarget.innerWidth)
        );
        return window.removeEventListener('resize', (evt) => 
            setTimeOut(evt.currentTarget.innerWidth)
        );
    }, []);

    return (
        <section className='movies-card-list'>
            <ul className='movies-card-list__list'>
                {type === 'all'
                    ? arrayMovie.slice(0, counter).map((movie) => {
                        return (
                            <MoviesCard 
                                movie={movie}
                                key={movie.id}
                                type={type}
                                onClickMovieBtn={onClickMovieBtn}
                            />
                        );
                    })    
                    : arrayMovie.map((movie) => {
                        return (
                            <MoviesCard 
                                movie={movie}
                                key={movie._id}
                                type={type}
                                onClickMovieBtn={onClickMovieBtn}
                            />
                        );
                    })}     
            </ul>
            {type === 'all' && arrayMovie.length > counter && (
                <More useCounter={useCounter} />
            )}
        </section>
    );
};