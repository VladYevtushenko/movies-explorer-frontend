import React, { useState } from 'react';
import './Profile.css';
import { FormTitle } from '../FormTitle/FormTitle';
import { Link } from 'react-router-dom';
import { Header } from '../Header/Header';

export const Profile = ({name, email}) => {
    const [errMessage, setErrMessage] = useState();
    const handleInput = (evt) => {
        setErrMessage(evt.target.validationMessage);
    };

    return (
        <>
            <Header />
            <section className='profile'>
                <FormTitle userName={name}/>  
                <form className='profile__form'>
                    <div className='profile__info'>
                        <label 
                            className='profile__name'
                            htmlFor='name'
                        >
                            Имя
                        </label>
                        <input 
                            className='profile__input'
                            defaultValue={name} 
                            name='name'
                            id='name'
                            type='text'
                            required
                            minLength={2}
                            onChange={handleInput}
                        />
                    </div>
                    <span className='input__error'>
                            {errMessage}
                        </span>
                    <div className='profile__info profile__info_email'>
                        <label className='profile__name profile__name_email'>
                            E-mail
                        </label>
                        <input 
                            className='profile__input profile__input_email'
                            defaultValue={email}
                            name='email'
                            id='email'
                            type='email'
                            required
                            onChange={handleInput}
                        />
                    </div>
                    <span className='input__error'>
                            {errMessage}
                        </span>
                    <button 
                        className='profile__edit-btn' 
                        type='submit'
                    >
                        Редактировать
                    </button>
                </form>
                <Link className='profile__logout' to='/'>
                    Выйти из аккаунта
                </Link>
            </section>
        </>
    );
};




