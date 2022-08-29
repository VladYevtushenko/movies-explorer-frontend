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

export const Movies = ({ loggedIn, onClickSaveMovie, openResultMessage, messageError }) => {
    const [preloaderOn, setPreloaderOn] = useState(false);
    const [filteredArrayMovies, setFilteredArrayMovies] = useState([]);
    const [isRender, setIsRender] = useState(true);

    const requestList = async (searchData) => {
        setPreloaderOn(true);
        const arrayAllMovies = localStorage.getItem('arrayAllMovies');

        if (!arrayAllMovies) {
            const allMovies = await getMovies();
            if (allMovies) {
                localStorage.setItem('arrayAllMovies', JSON.stringify(allMovies));
            } else {
                openResultMessage(SERVER_ERROR_SEARCH);
            }
        }

        localStorage.setItem('searchText', searchData.text.toLowerCase());
        localStorage.setItem('shortFilter', searchData.short);
        const arraySearch = filterList();
        return renderMoviesList(arraySearch);
    };

    const onClickShortMovieBtn = (searchData) => {
        localStorage.setItem('shortFilter', searchData);
        const arraySearch = filterList();
        return renderMoviesList(arraySearch);
    };

    const renderMoviesList = (array) => {
        if (array.length === 0) {
            openResultMessage(NOT_FOUND_MESSAGE);
        } else { 
            setFilteredArrayMovies(array);
        }
        setIsRender(true);
        return setPreloaderOn(false);
    }; 

    useEffect(() => {
        const arrayAllMovies = localStorage.getItem('arrayAllMovies');

        if (!arrayAllMovies) {
            setIsRender(false);
            return;
        }
        const arraySearch = filterList();
        setIsRender(true);
        renderMoviesList(arraySearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm 
                    requestList={requestList}
                    openResultMessage={openResultMessage}
                    type={'allMovies'}
                    onClickShortMovieBtn={onClickShortMovieBtn}
                />
                {preloaderOn ? (
                    <Preloader />
                ) : (
                    isRender && (
                        <MoviesCardList 
                            arrayMovie={filteredArrayMovies}
                            type={'all'}
                            onClickMovieBtn={onClickSaveMovie}
                        />
                    )
                )}
            </main>
            <Footer />
        </>
    );
};