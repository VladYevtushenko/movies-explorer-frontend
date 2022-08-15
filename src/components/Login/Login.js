import React from 'react';
import './Login.css';
import { AuthLogo } from '../AuthLogo/AuthLogo';
import { AuthTitle } from '../AuthTitle/AuthTitle';
import { AuthBox } from '../AuthBox/AuthBox';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthBtn } from '../AuthBtn/AuthBtn';
import { AuthCaption } from '../AuthCaption/AuthCaption';

export const Login = () => {
    return (
        <section className='login'>
            <AuthLogo />
            <AuthTitle titleText="Рады видеть!" />
            <AuthBox>
                <AuthForm>
                    <AuthInput lableText='E-mail' />
                    <AuthInput lableText='Password' />
                </AuthForm>
            </AuthBox>
            <AuthBtn btnText='Войти' />
            <AuthCaption 
                text='Ещё не зарегистрированы?'
                linkText='Регистрация'
                linkTo='/signup' 
            />
        </section>
    );
};