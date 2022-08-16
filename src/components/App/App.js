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

export const App = () => {
// eslint-disable-next-line no-unused-vars
const [loggedIn, setLoggedIn] = useState(true);

    return (
        <div className='page'>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path='/movies' element={<Movies loggedIn={loggedIn} />} />
                <Route path='/saved-movies' element={<SavedMovies loggedIn={loggedIn} />} />
                <Route path='/profile' element={<Profile loggedIn={loggedIn} />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/signup' element={<Register />} />
                <Route path ='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};