import { SHORT_MOVIE_LENGTH } from "../consts/consts";

export const filterList = () => {
    const arrayAllMovies = JSON.parse(localStorage.getItem('arrayAllMovies'));
    const searchText = localStorage.getItem('searchText');
    const shortFilter = localStorage.getItem('shortFilter');

    const filteredArray = arrayAllMovies.filter(
        (movie) => movie.nameRU.toLowerCase().indexOf(searchText) >= 0
    );
    if (shortFilter === 'on') {
        const shortArray = filteredArray.filter(
            (movie) => movie.duration <= SHORT_MOVIE_LENGTH
        );
        return shortArray;
    } else return filteredArray;
};

export const filterSavedList = (array, searchText, short) => {
    console.log({array});
    console.log({searchText});
    console.log({short});
    const filteredArray = array.filter(
        (movie) => movie.nameRU.indexOf(searchText) >= 0
    );
    console.log({filteredArray});
    
    if (short === 'on') {
        const shortArray = filteredArray.filter(
            (movie) => movie.duration <= SHORT_MOVIE_LENGTH
        );
        return shortArray;
    } else return filteredArray;
}; 