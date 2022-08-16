import React from 'react';
import './Register.css';
import { AuthLogo } from '../AuthLogo/AuthLogo';
import { AuthTitle } from '../AuthTitle/AuthTitle';
import { AuthBox } from '../AuthBox/AuthBox';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthBtn } from '../AuthBtn/AuthBtn';
import { AuthCaption } from '../AuthCaption/AuthCaption';

export const Register = () => {
    return (
        <section className='register'>
            <AuthLogo />
            <AuthTitle titleText="Добро пожаловать!" />
            <AuthBox>
                <AuthForm>
                    <AuthInput 
                        lableText='Имя' 
                        type='text'
                        name='name'
                        required='required'
                        minLength={2}
                        maxLength={30}
                    />
                    <AuthInput 
                        lableText='E-mail' 
                        type='email'
                        required='required'

                    />
                    <AuthInput 
                        lableText='Password' 
                        type='password'
                        required='required'
                        minLength={8}
                    />
                </AuthForm>
            </AuthBox>
            <AuthBtn btnText='Зарегистрироваться' />
            <AuthCaption 
                text='Уже зарегистрированы?'
                linkText='Войти'
                linkTo='/signin' 
            />
        </section>
    );
};