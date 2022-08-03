import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import { Main } from '../Main/Main';

export const App = () => {
    return (
        <div className='page'>
            <Switch>
                <Route exact path='/' element={<Main />} />
                <Route path='/movies' />
                <Route path='/saved-movies' />
                <Route path='/profile' />
                <Route path='/signin' />
                <Route path='/signup'/>
            </Switch>
        </div>
    );
};