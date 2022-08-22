import { useEffect, useState } from 'react';
import './Movies.css';
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader.js';
import { Footer } from '../Footer/Footer';
import { getMovies } from '../../utils/MoviesApi';
import { NOT_FOUND_MESSAGE, SERVER_ERROR_SEARCH } from '../../consts/consts';
import { filterList } from '../../utils/filterList';

export const Movies = ({ loggedIn, onClickMovieBtn, openResultMessage }) => {
    const [preloaderOn, setPreloaderOn] = useState(false);
    const [filteredMoviesList, setFilteredMoviesList] = useState([]);
    const [isRender, setIsRender] = useState(true);

    const requestList = async (data) => {
        setPreloaderOn(true);
        const allMoviesList = localStorage.getItem('allMoviesList');

        if (!allMoviesList) {
            const completeMoviesList = await getMovies();

            if (completeMoviesList) {
                localStorage.setItem('allMoviesList', JSON.stringify(completeMoviesList));

            } else {
                openResultMessage(SERVER_ERROR_SEARCH);
            }
        }
        localStorage.setItem('searchMovie', data.text.toLowerCase());
        localStorage.setItem('shortMovieFilter', data.shortMovie);
        const listSearch = filterList();
        return renderMoviesList(listSearch);
    };

    const onClickShortMovieBtn = (data) => {
        localStorage.setItem('shortMovieFilter', data);
        const listSearch = filterList();
        return renderMoviesList(listSearch);
    };

    const renderMoviesList = (list) => {
        if (list.length === 0) {
            openResultMessage(NOT_FOUND_MESSAGE);
        } else { 
            setFilteredMoviesList(list);
        }
        setIsRender(true);
        return setPreloaderOn(false);
    }; 

    useEffect(() => {
        const allMoviesList = localStorage.getItem('allMoviesList');
        if (!allMoviesList) {
            setIsRender(false);
            return;
        }
        const listSearch = filterList();
        setIsRender(true);
        renderMoviesList(listSearch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm 
                    requestList={requestList}
                    openResultMessage={openResultMessage}
                    type={'completeMoviesList'}
                    onClickShortMovieBtn={onClickShortMovieBtn}
                />
                {preloaderOn ? (
                    <Preloader />
                ) : (
                    isRender && (
                        <MoviesCardList 
                            moviesList={filteredMoviesList}
                            type={'all'}
                            onClickMovieBtn={onClickMovieBtn}
                        />
                    )
                )}
            </main>
            <Footer />
        </>
    );
};