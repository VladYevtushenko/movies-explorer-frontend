import React, { useEffect, useState } from 'react';
import './Register.css';
import { AuthLogo } from '../AuthLogo/AuthLogo';
import { AuthTitle } from '../AuthTitle/AuthTitle';
import { AuthBox } from '../AuthBox/AuthBox';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthBtn } from '../AuthBtn/AuthBtn';
import { AuthCaption } from '../AuthCaption/AuthCaption';

export const Register = ({ type, resultMessage, isAccept, onclick }) => {
    const [messageError, setMessageError] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [isValid, setIsValid] = useState(true);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setUserData((prev) => ({...prev, [name]: value}));
        setMessageError((prev) => ({
            ...prev,
            [name]: evt.target.validationMessage,
        }))
    };

    const registration = (e) => {
        if (type === 'signup' && 
            (!userData.name || !userData.password || !userData.email)
        ) {
            return;
        } else {
            return onclick(userData);
        }
    };
    
    useEffect(() => {
        if (type === 'signup') {
            if (messageError.name || messageError.email || messageError.password) {
                return setIsValid(false);
            } else if (!userData.name || !userData.password || !userData.email) {
                return setIsValid(false);
            }
        }
        setIsValid(true);
    }, [messageError, userData, type]);

    return (
        <section className='register'>
            <AuthLogo />
            <AuthTitle titleText="Добро пожаловать!" />
            <AuthBox>
                <AuthForm type={'signup'} name='signup' isAccept={isAccept}>
                    <AuthInput 
                        lableText='Имя' 
                        type='text'
                        name='name'
                        required
                        minLength={2}
                        maxLength={30}
                        onChange={handleChange}
                        pattern='^[A-Za-zА-Яа-яЁё /s -]+$'
                        value={userData.name}
                        messageError={messageError.name}
                    />
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
                        name='password'
                        type='password'
                        required
                        minLength={8}
                        value={userData.password}
                        onChange={handleChange}
                        messageError={messageError.password}
                    />
                    <AuthBtn 
                        btnText='Зарегистрироваться' 
                        onclick={registration}
                        disabled={!isValid}
                        resultMessage={resultMessage}
                        form={type}
                    />
                </AuthForm>
            </AuthBox>
            
            <AuthCaption 
                text='Уже зарегистрированы?'
                linkText='Войти'
                linkTo='/signin' 
            />
        </section>
    );
};