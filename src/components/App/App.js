/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
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
} from '../../utils/auth';
import { 
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
    const [currentUser, setCurrentUser] = useState({});
    const [currentMovies, setCurrentMovies] = useState([]);
    const [resultMessage, setResultMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isAccept, setIsAccept] = useState(true);
    const [isMessageBannerOpen, setMessageBanner] = useState(false);

    let messageClean;

    // check token

    useEffect(() => {
        checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const checkToken = () => {
		if (localStorage.getItem('jwt')) {
			const token = localStorage.getItem('jwt')
			getContent(token)
				.then((res) => {
					if (res) {
						setLoggedIn(true);
						setCurrentUser({
                            email: res.email,
                            name: res.name
                        });
                        navigate('/movies');
					}
				})
				.catch((err) => console.log(err));
		}
	}

    //regestration

    const signUp = async (userData) => {
        setResultMessage('');
        setIsAccept(false);
    
        const res = await register(userData);
        if (res.message === CONFLICT_STATUS) {
            setResultMessage(CONFLICT_ERROR);
            messageClean = setTimeout(() => {
                setIsAccept(false);
                setResultMessage('');
            }, 3000);
        } else if (res.data._id) {
                setIsAccept(true);
                setResultMessage(SUCCESS_REG_MESSAGE);
                setIsAccept(false);
                messageClean = setTimeout(() => {
                    setIsAccept(true);
                    setResultMessage('');
                }, 3000);
                return onLogin(userData);
            } else {
            setResultMessage(SERVER_ERROR);
        }
        setIsAccept(false);
        messageClean = setTimeout(() => {
            setIsAccept(true);
            setResultMessage('');
        }, 5000);
        
    };

    // Authorisation

    const onLogin = async (userData) => {
        setResultMessage('');
        setIsAccept(false);

        const userDataAuth = {
            email: userData.email,
            password: userData.password
        };
        const res = await authorize(userDataAuth);

        if (res.token) {
            localStorage.setItem('jwt', res.token);
            setLoggedIn(true);
            const user = await getUserInfo();
            const movies = await getMovies();
            setCurrentMovies(movies);
            setCurrentUser(user);
            navigate('/movies');
        } else 
        if (res.message === UNAUTHORIZED_ERROR) {
            setResultMessage(EMAIL_PASSWORD_ERROR);
            setIsAccept(false);
        } else {
            setResultMessage(SERVER_ERROR);
            setIsAccept(false);
        }
        messageClean = setTimeout(() => {
            setIsAccept(true);
            setResultMessage('');
        }, 3000);
    };

    // profile editing

    const onClickUpdateProfile = async (userDataNew) => {
        console.log({userDataNew});
        
        const res = await updateUserData(userDataNew);
        console.log({res});
        
        if (res.email || res.name) {
            setIsAccept(false);
            setResultMessage(ACCAUNT_EDIT_SUCCES)
            setCurrentUser(userDataNew);
        } 
        else if (res.message === CONFLICT_STATUS) {
            setIsAccept(false);
            setResultMessage(CONFLICT_ERROR);
        } 
        else {
            setIsAccept(false);
            setResultMessage(SERVER_ERROR);
        }
        messageClean = setTimeout(() => {
            setIsAccept(true);
            setResultMessage('');
        }, 3000);
    };

    // account signOut

    const signOut = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('arrayAllMovies');
        localStorage.removeItem('searchText');
        localStorage.removeItem('shortFilter');
        setLoggedIn(false);
        setCurrentUser({});
        setCurrentMovies([]);
    };

    // remove movie from savedMovie

    const onClickDeleteMovie = async (id) => {
        const res = await deleteFromSavedMovies(id);
        if (res.message === MOVIE_DEL_MESSAGE) {
            setCurrentMovies((prev) => prev.filter((element) => element._id !== id));
        } else {
            setIsAccept(false);
            setResultMessage(SERVER_ERROR);
        }
    };

    // add movie to savedMovies by id

    const onClickSaveMovie = async (movie, status, id) => {
        // console.log({movie});
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
        // console.log({movieNew});
        
        delete movieNew.id;
        delete movieNew.created_at;
        delete movieNew.updated_at;
        const res = await addToSavedMovies(movieNew);

        if (res) {
            setCurrentMovies((prev) => [...prev, res]);
        }   else if (res.message === BAD_REQUEST) {
            setResultMessage(SAVE_ERROR_MESSAGE);
            setMessageBanner(true);
        } else {
            setResultMessage(SERVER_ERROR);
            setMessageBanner(true);
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

    useEffect(() => {
        setIsAccept(true);
    }, [navigate]);

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <CurrentMoviesSaveContext.Provider value={currentMovies}>
                {
                    <div className='page'>
                        <Routes>
                            <Route exact path='/' element={<Main loggedIn={loggedIn} />} />
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
                                path='/saved-movies' 
                                element={
                                    <ProtectedRoute loggedIn={loggedIn}>
                                        <SavedMovies 
                                            loggedIn={loggedIn}
                                            currentMovies={setCurrentMovies}
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
                                            isAccept={isAccept}
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
                                            isAccept={isAccept}
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
                                            isAccept={isAccept}
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
                            isAccept={isAccept}
                        />
                    </div>
                }
            </CurrentMoviesSaveContext.Provider>
        </CurrentUserContext.Provider>
    );
};