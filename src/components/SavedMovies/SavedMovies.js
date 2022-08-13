import React from 'react';
import './SavedMovies.css'
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Footer } from '../Footer/Footer';

export const SavedMovies = ({loggedIn}) => {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className='saved-movies'>
                <SearchForm />
                <MoviesCardList />
            </section>
            <Footer />
        </>
    );
}; 