import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';

export const App = () => {
    return (
        <div className='page'>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/saved-movies' element={<SavedMovies />}/>
                <Route path='/profile' />
                <Route path='/signin' />
                <Route path='/signup'/>
            </Routes>
        </div>
    );
};