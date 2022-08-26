import React, { useState, useEffect } from 'react';
import './Login.css';
import { AuthLogo } from '../AuthLogo/AuthLogo';
import { AuthTitle } from '../AuthTitle/AuthTitle';
import { AuthBox } from '../AuthBox/AuthBox';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthBtn } from '../AuthBtn/AuthBtn';
import { AuthCaption } from '../AuthCaption/AuthCaption';

export const Login = ({ type, isAccept }) => {
    const [messageError, setMessageError] = useState({
        email: '',
        password: '',
    });
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const [isValid, setIsValid] = useState(false);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUserData((prev) => ({...prev, [name]: value}));
        setMessageError((prev) => ({
            ...prev,
            [name]: evt.target.validationMessage,
        }))
    };

    const login = (e) => {
        if (type === 'signin' && (!userData.password || !userData.email)) {
            return;
        } else {
            return onclick(userData);
        }
    };
    
    useEffect(() => {
        if (type === 'signin') {
            if (messageError.email || messageError.password) {
                return setIsValid(false);
            } else if (!userData.password || !userData.email) {
                return setIsValid(false);
            }
        }
        setIsValid(true);
    }, [messageError, userData, type]);


    return (
        <section className='login'>
            <AuthLogo />
            <AuthTitle titleText="Рады видеть!" />
            <AuthBox>
                <AuthForm type='signin' isAccept={isAccept}>
                    <AuthInput 
                        lableText='E-mail' 
                        type='email'
                        name='email'
                        required
                        onChange={handleChange}
                        value={userData.email}
                        messageError={messageError.email}
                    />
                    <AuthInput 
                        lableText='Password' 
                        type='password'
                        name='password'
                        minLength={8}
                        required
                        value={userData.password}
                        onChange={handleChange}
                        messageError={messageError.password}
                    />
                </AuthForm>
            </AuthBox>
            <AuthBtn 
                btnText='Войти'
                onclick={login}
                disabled={isValid}
                isAccept={!isAccept}
            />
            <AuthCaption 
                text='Ещё не зарегистрированы?'
                linkText='Регистрация'
                linkTo='/signup' 
            />
        </section>
    );
};