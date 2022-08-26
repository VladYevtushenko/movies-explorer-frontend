import { SHORT_MOVIE_LENGHT } from "../consts/consts";

export const filterList = () => {
    const arrayAllMovies = JSON.parse(localStorage.getItem('arrayAllMovies'));
    const searchText = localStorage.getItem('searchText');
    const shortFilter = localStorage.getItem('shortFilter');

    const filteredArray = arrayAllMovies.filter(
        (movie) => movie.nameRU.toLowerCase().indexOf(searchText) >= 0
    );
    if (shortFilter === 'on') {
        const shortArray = filteredArray.filter(
            (movie) => movie.duration < SHORT_MOVIE_LENGHT
        );
        return shortArray;
    } else return filteredArray;
};

export const filterSavedList = (array, searchText, short) => {
    const filteredArray = array.filter(
        (movie) => movie.nameRu.indexOf(searchText) >= 0
    );
    if (short === 'on') {
        const shortArray = filteredArray.filter(
            (movie) => movie.duration < SHORT_MOVIE_LENGHT
        );
        return shortArray;
    } else return filteredArray;
}; 