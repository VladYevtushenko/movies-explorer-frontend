import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';

export const App = () => {
    return (
        <div className='page'>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/saved-movies' element={<SavedMovies />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/signin' element={<Login />}/>
                <Route path='/signup'/>
            </Routes>
        </div>
    );
};