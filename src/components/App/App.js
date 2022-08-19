import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFound } from '../NotFound/NotFound';
import { CurrentMoviesSaveContext } from '../../contexts/CurrentMoviesSaveContext';

export const App = ({loggedIn}) => {
const [currentMovies, setCurrentMovies] = useState([]);
    return (
        <CurrentMoviesSaveContext.Provider value={currentMovies}>
            {
                <div className='page'>
                    <Routes>
                        <Route exact path='/' element={<Main loggedIn={loggedIn}/>} />
                        <Route path='/movies' element={<Movies loggedIn={loggedIn} />} />
                        <Route path='/saved-movies' element={<SavedMovies loggedIn={loggedIn} />} />
                        <Route 
                            path='/profile' 
                            element={
                                <Profile 
                                    loggedIn={loggedIn}
                                    name='Влад'
                                    email='vlad@vlad.ru'
                                />} 
                        />
                        <Route path='/signin' element={<Login />} />
                        <Route path='/signup' element={<Register />} />
                        <Route path ='*' element={<NotFound />} />
                    </Routes>
                </div>
            }
        </CurrentMoviesSaveContext.Provider>
    );
};