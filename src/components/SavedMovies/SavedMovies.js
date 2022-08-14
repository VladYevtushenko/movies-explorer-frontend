import React from 'react';
import './SavedMovies.css'
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
// import { Preloader } from '../Preloader/Preloader'
import { Footer } from '../Footer/Footer';

export const SavedMovies = ({loggedIn}) => {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className='saved-movies'>
                {/* <Preloader /> */}
                <SearchForm />
                <MoviesCardList />
            </section>
            <Footer />
        </>
    );
}; 