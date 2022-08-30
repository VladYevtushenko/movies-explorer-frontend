import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';
import { FormTitle } from '../FormTitle/FormTitle';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Profile = ({
    signOut,
    onClickUpdateProfile,
    resultMessage,
    isAccept,
    loggedIn
}) => {
    const currentUser = useContext(CurrentUserContext);
    
    const [edit, setEdit] = useState(false);
    const [messageError, setMessageError] = useState({ name: '', email: '' });
    const [userDataUpdate, setUserDataUpdate] = useState({ name: '', email: '' });    
    const [isValid, setIsValid] = useState(true);

    const classSaveButton = classNames(`profile__button`, {
        'profile__button_disabled': !isValid,
        'profile__button_disabled profile__button_span': !isAccept,

    });

    useEffect(() => {
        setUserDataUpdate({ name: currentUser.name, email: currentUser.email });
    }, [currentUser]);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUserDataUpdate((prev) => ({ ...prev, [name]: value }));
        setMessageError((prev) => ({
            ...prev,
            [name]: evt.target.validationMessage,
        }));
    };

    const updateProfile = (e) => {
        e.preventDefault();
        if (messageError.name && messageError.email) {
            return;
        }
        onClickUpdateProfile(userDataUpdate);
    };

    useEffect(() => {
        if (messageError.name || messageError.email) {
            return setIsValid(false);
        } else if (
            currentUser.name === userDataUpdate.name && 
            currentUser.email === userDataUpdate.email 
        ) {
            return setIsValid(false);
        }
        setIsValid(true);
    }, [messageError, userDataUpdate, currentUser]);

    return (
        <>
            <Header loggedIn={loggedIn} />
            <section className='profile'>
                <FormTitle userName={currentUser.name}/>  
                <form className='profile__form'>
                    <fieldset className='profile__info'>
                        <label 
                            className='profile__name'
                            htmlFor='name'
                        >
                            Имя
                        </label>
                        <input 
                            className='profile__input'
                            defaultValue={userDataUpdate.name} 
                            name='name'
                            id='name'
                            type='text'
                            required
                            minLength={2}
                            maxLength={100}
                            onChange={handleChange}
                            placeholder='Имя'
                            pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
                            disabled={!edit}
                        />
                    </fieldset>
                    {messageError.name && (
                        <span className='input__error'>
                            {messageError.name}
                        </span>
                    )}
                    <fieldset className='profile__info profile__info_email'>
                        <label className='profile__name profile__name_email'>
                            E-mail
                        </label>
                        <input 
                            className='profile__input profile__input_email'
                            defaultValue={userDataUpdate.email}
                            name='email'
                            id='email'
                            type='email'
                            placeholder='email'
                            required
                            onChange={handleChange}
                            disabled={!edit}
                            title='email'
                        />
                    </fieldset>
                    {messageError.email && (
                        <span className='input__error'>
                            {messageError.email}
                        </span>
                    )}
                    {!isAccept && <span className='profile__error'>{resultMessage}</span>}
                    {edit ? (
                        <button 
                            className={classSaveButton}
                            disabled={!isValid}
                            onClick={updateProfile}
                            type='submit'
                        >
                            Сохранить
                        </button>
                    ) : (
                        <>
                            <p
                                className='profile__button'
                                onClick={() => setEdit(!edit)}
                            >
                                Редактировать
                            </p>
                            <Link 
                                className='profile__logout' 
                                to='/'
                                onClick={signOut}
                            >
                                Выйти из аккаунта
                            </Link>
                        </>
                    )}
                </form>
            </section>
        </>
    );
};