import React, { useState, useEffect, useContext } from 'react';
import { CurrentMoviesSaveContext } from '../../contexts/CurrentMoviesSaveContext';
import './SavedMovies.css'
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader'
import { Footer } from '../Footer/Footer';
import { NOT_FOUND_MESSAGE } from '../../consts/consts';
import { filterSavedList } from '../../utils/filterList';

export const SavedMovies = ({
    loggedIn,
    onClickDeleteMovie,
    openResultMessage
}) => {
    const currentMovies = useContext(CurrentMoviesSaveContext);
    const [preloaderOn, setPreloaderOn] = useState(false);
    const [filteredArrayMovies, setFilteredArrayMovies] = useState(currentMovies);
    const [searchText, setSearchText] = useState('');

    console.log({currentMovies});
    console.log({filteredArrayMovies});

    const requestList = (searchData) => {
    console.log({searchData});
        setSearchText(searchData.text.toLowerCase());
        setPreloaderOn(true);
        const arraySearch = filterSavedList(
            currentMovies,
            searchData.text.toLowerCase(),
            searchData.short
        );
        console.log({arraySearch});
        return renderArray(arraySearch);
    };

    const onClickShortMovieBtn = (searchData) => {
        const arraySearch = filterSavedList(currentMovies, searchText, searchData);
        return renderArray(arraySearch);
    };

    const renderArray = (array) => {
        if (array.lenght === 0) {
            openResultMessage(NOT_FOUND_MESSAGE);
        } else {
            setFilteredArrayMovies(array);
        }
        return setPreloaderOn(false);
    };

    useEffect(() => {
        setFilteredArrayMovies(currentMovies);
        return setSearchText('');
    }, [currentMovies]);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className='saved-movies'>
                <SearchForm 
                    requestList={requestList}
                    openResultMessage={openResultMessage}
                    type={'saveMovies'}
                    onClickShortMovieBtn={onClickShortMovieBtn}
                />
                {preloaderOn ? (
                    <Preloader />
                ) : ( 
                    currentMovies.lenght > 0 && (
                        <>
                            <MoviesCardList 
                                arrayMovie={filteredArrayMovies}
                                type={'save'}
                                onClickMovieBtn={onClickDeleteMovie}
                            />
                        </>
                    )
                )}
            </section>
            <Footer />
        </>
    );
}; 