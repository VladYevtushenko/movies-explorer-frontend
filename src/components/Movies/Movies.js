import './Movies.css';
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
// import { Preloader } from '../Preloader/Preloader.js';
import { Footer } from '../Footer/Footer';

export const Movies = ({ loggedIn }) => {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm />
                {/* <Preloader /> */}
                <MoviesCardList />
            </main>
            <Footer />
        </>
    );
};