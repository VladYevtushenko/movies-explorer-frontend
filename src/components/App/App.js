import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate, useLocation} from "react-router-dom";
import { ProtectedRoute } from '../../utils/ProtectedRoute';
import './App.css';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { NotFound } from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { CurrentMoviesSaveContext } from '../../contexts/CurrentMoviesSaveContext';
import { MessageBanner } from '../MessageBanner/MessageBanner';
import { 
    register,
    authorize,
    getContent,
    logOut,
} from '../../utils/auth';
import { 
    headers,
    getMovies,
    getUserInfo,
    addToSavedMovies,
    deleteFromSavedMovies,
    updateUserData,
} from '../../utils/MainApi';
import { 
    MOVIE_DEL_MESSAGE,
    SERVER_ERROR,
    BAD_REQUEST,
    SAVE_ERROR_MESSAGE,
    EMAIL_PASSWORD_ERROR,
    CONFLICT_ERROR,
    SUCCESS_REG_MESSAGE,
    CONFLICT_STATUS,
    UNAUTHORIZED_ERROR,
    ACCAUNT_EDIT_SUCCES,
} from '../../consts/consts';



export const App = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState({});
    const [currentMovies, setCurrentMovies] = useState([]);
    const [resultMessage, setResultMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAllowed, setIsAllowed] = useState(true);
    const [isMessageBannerOpen, setMessageBanner] = useState(false);

    let messageClean;

    //regestration

    const signUp = async (userData) => {
        setResultMessage('');
        setIsAllowed(false);
    
        const res = await register(userData);
        if (res.message === CONFLICT_STATUS) {
            setResultMessage(CONFLICT_ERROR);
            messageClean = setTimeout(() => {
                setIsAllowed(false);
                setResultMessage('');
            }, 3000);
        } else if (res.data._id) {
                setIsAllowed(true);
                setResultMessage(SUCCESS_REG_MESSAGE);
                setIsAllowed(false);
                messageClean = setTimeout(() => {
                    setIsAllowed(true);
                    setResultMessage('');
                }, 3000);
                return onLogin(userData);
            } else {
            setResultMessage(SERVER_ERROR);
        }
        setIsAllowed(false);
        messageClean = setTimeout(() => {
            setIsAllowed(true);
            setResultMessage('');
        }, 3000);
        
    };

    // Authorisation

    const onLogin = async (userData) => {
        setResultMessage('');
        setIsAllowed(false);
        const userDataAuth = {
            email: userData.email,
            password: userData.password
        };
        const res = await authorize(userDataAuth);
        if (res.token) {
            localStorage.setItem('jwt', res.token)
            headers.Authorization = `Bearer ${localStorage.getItem('token')}`
            setLoggedIn(true);
            const user = await getUserInfo();
            const movies = await getMovies();
            setCurrentMovies(movies);
            setCurrentUser(user);
            navigate('/movies');
        } else 
        if (res.message === UNAUTHORIZED_ERROR) {
            setResultMessage(EMAIL_PASSWORD_ERROR);
            setIsAllowed(false);
        } else {
            setResultMessage(SERVER_ERROR);
            setIsAllowed(false);
        }
        messageClean = setTimeout(() => {
            setIsAllowed(true);
            setResultMessage('');
        }, 3000);
    };

    // profile editing

    const onClickUpdateProfile = async (userDataNew) => {
        const res = await updateUserData(userDataNew);
        if (res.message === CONFLICT_STATUS) {
            setIsAllowed(false);
            setResultMessage(CONFLICT_ERROR);
        }
        else if (res.email || res.name) {
            setIsAllowed(false);
            setResultMessage(ACCAUNT_EDIT_SUCCES)
            setCurrentUser(userDataNew);
        } 
        else {
            setIsAllowed(false);
            setResultMessage(SERVER_ERROR);
        }
        messageClean = setTimeout(() => {
            setIsAllowed(true);
            setResultMessage('');
        }, 3000);
    };

    // account signOut

    const signOut = () => {
        logOut();
        localStorage.removeItem('jwt');
        localStorage.removeItem('arrayAllMovies');
        localStorage.removeItem('searchText');
        localStorage.removeItem('shortFilter');
        setLoggedIn(false);
        setCurrentUser({});
        setCurrentMovies([]);
    };

    // add movie to savedMovies by id

    const onClickSaveMovie = async (movie, status, id) => {
        if (status === 'delete') {
            onClickDeleteMovie(id);
            return;
        }

        const movieNew = {
            ...movie,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
        };
        
        delete movieNew.id;
        delete movieNew.created_at;
        delete movieNew.updated_at;
        const res = await addToSavedMovies(movieNew);
        
        if (res._id) {
            setCurrentMovies((prev) => [...prev, res]);
        }   else if (res.message === BAD_REQUEST) {
            setResultMessage(SAVE_ERROR_MESSAGE);
            setMessageBanner(true);
        } else {
            setResultMessage(SERVER_ERROR);
            setMessageBanner(true);
        }
    };

    // remove movie from savedMovie

    const onClickDeleteMovie = async (id) => {
        const res = await deleteFromSavedMovies(id);
        if (res.message === MOVIE_DEL_MESSAGE) {
            setCurrentMovies((prev) => prev.filter((element) => element._id !== id));
        } else {
            setIsAllowed(false);
            setResultMessage(SERVER_ERROR);
        }
    };

    const closeResultMessage = () => {
        setMessageBanner(false);
        setResultMessage('');
    };

    const openResultMessage = (message) => {
        setResultMessage(message);
        setMessageBanner(true);
    };

    // token check

    const checkToken = () => {
			const token = localStorage.getItem('jwt')
			if (!token) {
                return false;
            }
            return getContent();
	};

    useEffect(() => {
        (async () => {
            const res = await checkToken();
            const path = location.pathname;
            if (res) {
                setLoggedIn(true);
                setCurrentUser(res);
                const movies = await getMovies(); 
                setCurrentMovies(movies);    
                navigate(path);            
            } else { 
                setLoggedIn(false); 
            }
        })();
        return clearTimeout(messageClean);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setIsAllowed(true);
    }, [navigate]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <CurrentMoviesSaveContext.Provider value={currentMovies}>
                {
                    <div className='page'>
                        <Routes>
                            <Route 
                                exact path='/' 
                                element={
                                    <Main loggedIn={loggedIn} />
                                } 
                            />

                            <Route 
                                path='/movies' 
                                element={
                                    <ProtectedRoute loggedIn={loggedIn}>
                                        <Movies 
                                            loggedIn={loggedIn}
                                            openResultMessage={openResultMessage}
                                            onClickSaveMovie={onClickSaveMovie}
                                        />
                                    </ProtectedRoute>
                                }
                            />

                            <Route 
                                path="/saved-movies" 
                                element={
                                    <ProtectedRoute loggedIn={loggedIn}>
                                        <SavedMovies 
                                            loggedIn={loggedIn}
                                            currentMovies={currentMovies}
                                            openResultMessage={openResultMessage}
                                            onClickDeleteMovie={onClickDeleteMovie}
                                        />
                                    </ProtectedRoute>
                                } 
                            />

                            <Route 
                                path='/profile' 
                                element={
                                    <ProtectedRoute loggedIn={loggedIn}>
                                        <Profile 
                                            loggedIn={loggedIn}
                                            signOut={signOut}
                                            resultMessage={resultMessage}
                                            isAllowed={isAllowed}
                                            onClickUpdateProfile={onClickUpdateProfile}
                                        />
                                    </ProtectedRoute>
                                } 
                            />

                            <Route 
                                path='/signin' 
                                element={
                                    loggedIn ? (
                                        <Navigate to='/movies' />
                                    ) : (
                                        <Login 
                                            onLogin={onLogin}
                                            resultMessage={resultMessage}
                                            isAllowed={isAllowed}
                                        />
                                    )
                                } 
                            />

                            <Route 
                                path='/signup' 
                                element={
                                    loggedIn ? (
                                        <Navigate to='/movies' />
                                    ) : (
                                        <Register 
                                            signUp={signUp}
                                            resultMessage={resultMessage}
                                            isAllowed={isAllowed}
                                        />
                                    )
                                } 
                            />
                            <Route path ='*' element={<NotFound />} />
                        </Routes>
                        <MessageBanner 
                            isOpen={isMessageBannerOpen}
                            onClose={closeResultMessage}
                            resultMessage={resultMessage}
                            isAllowed={isAllowed}
                        />
                    </div>
                }
            </CurrentMoviesSaveContext.Provider>
        </CurrentUserContext.Provider>
    );
};