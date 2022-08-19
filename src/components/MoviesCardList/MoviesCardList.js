import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { MoviesCard } from './Components/MoviesCard/MoviesCard';
import {
    VP_WIDTH_1280,
    VP_WIDTH_768,
    VP_WIDTH_762,
    ITEMS_PER_WIDTH_1280,
    ITEMS_PER_WIDTH_768,
    ITEMS_PER_WIDTH_762,
    ADD_3_TO_LIST,
    ADD_2_TO_LIST,
} from '../../consts/consts.js';

export const MoviesCardList = ({ movieList, type }) => {
    const [counter, setCounter] = useState();
    const [moreCard, setMoreCard] = useState();

    const defineCardAmount = (viewWidth) => {
        if (viewWidth >= VP_WIDTH_1280) {
            setCounter(ITEMS_PER_WIDTH_1280);
            return setMoreCard(ADD_3_TO_LIST);
        } else if (viewWidth > VP_WIDTH_762 ) {

        }
    };
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
            <div className='movies-card-list__more-container'>
                <button 
                    type='button' 
                    className='movies-card-list__more-btn'
                >Ещё</button>
            </div>
        </section>
    );
};