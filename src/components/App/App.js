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
import { MessageBanner } from '../MessageBanner/MessageBanner';


export const App = ({loggedIn}) => {
    const [currentMovies, setCurrentMovies] = useState([]);
    const [isMessageBannerOpen, setMessageBanner] = useState(false);
    const [resultMessage, setResultMessage] = useState('');
    
    const openResultMessage = (message) => {
        setResultMessage(message);
        setMessageBanner(true);
    };

    const closeResultMessage = () => {
        setMessageBanner(false);
        setResultMessage('');
    };

    return (
        <CurrentMoviesSaveContext.Provider value={currentMovies}>
            {
                <div className='page'>
                    <Routes>
                        <Route exact path='/' element={<Main loggedIn={loggedIn}/>} />
                        <Route 
                            path='/movies' 
                            element={
                                <Movies 
                                    loggedIn={loggedIn}
                                    openResultMessage={openResultMessage}
                                />
                            }
                        />
                        <Route 
                            path='/saved-movies' 
                            element={
                                <SavedMovies 
                                    loggedIn={loggedIn} 
                                />
                            } 
                        />
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
                    <MessageBanner 
                        isOpen={isMessageBannerOpen}
                        onClose={closeResultMessage}
                        resultMessage={resultMessage}
                    />
                </div>
            }
        </CurrentMoviesSaveContext.Provider>
    );
};