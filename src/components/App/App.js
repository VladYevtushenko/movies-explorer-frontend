import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';

export const App = () => {
    return (
        <div className='page'>
            <Routes>
                <Route exact path='/' element={<Main />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/saved-movies' />
                <Route path='/profile' />
                <Route path='/signin' />
                <Route path='/signup'/>
            </Routes>
        </div>
    );
};