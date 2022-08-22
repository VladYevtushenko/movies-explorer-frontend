import { SHORT_MOVIE_LENGHT } from "../consts/consts";

export const filterList = () => {
    const allMoviesList = JSON.parse(localStorage.getItem('allMoviesList'));
    const searchMovie = localStorage.getItem('searchMovie');
    const shortMovieFilter = localStorage.getItem('shortMovieFilter');

    const filteredList = allMoviesList.filter(
        (movie) => movie.nameRU.toLowerCase().indexOf(searchMovie) >= 0
    );
    if (shortMovieFilter === 'on') {
        const shortList = filteredList.filter(
            (movie) => movie.lenght < SHORT_MOVIE_LENGHT
        );
        return shortList;
    } else return filteredList
};

export const filterSavedList = (list, searchMovie, shortMode) => {
    const filteredList = list.filter(
        (movie) => movie.nameRu.indexOf(searchMovie) >= 0
    );
    if (shortMode === 'on') {
        const shortList = filteredList.filter(
            (movie) => movie.lenght < SHORT_MOVIE_LENGHT
        );
        return shortList;
    } else return filteredList;
}; 