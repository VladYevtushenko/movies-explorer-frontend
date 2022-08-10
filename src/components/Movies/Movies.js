import './Movies.css';
import { Header } from '../Header/Header';
import { SearchForm } from '../SearchForm/SearchForm';
import { Footer } from '../Footer/Footer';

export const Movies = ({ loggedIn }) => {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <main className='movies'>
                <SearchForm />
            </main>
            <Footer />
        </>
    );
};