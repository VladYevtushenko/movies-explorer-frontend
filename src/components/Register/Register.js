import React, { useEffect, useState } from 'react';
import './Register.css';
import { AuthLogo } from '../AuthLogo/AuthLogo';
import { AuthTitle } from '../AuthTitle/AuthTitle';
import { AuthBox } from '../AuthBox/AuthBox';
import { AuthForm } from '../AuthForm/AuthForm';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthCaption } from '../AuthCaption/AuthCaption';
import classNames from 'classnames';

export const Register = ({ resultMessage, isAllowed, signUp }) => {
    const type = 'signup';
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

    const [isValid, setIsValid] = useState(false);

    const classSaveButton = classNames(`button`, {
        button_disabled: !isValid,
        'button_disabled button__span': !isAllowed,
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUserData((prev) => ({...prev, [name]: value}));
        setMessageError((prev) => ({
            ...prev,
            [name]: e.target.validationMessage,
        }));
    };

    const submitReg = (e) => {
        e.preventDefault();
        if (type === 'signup' && 
            (!userData.name || !userData.password || !userData.email)
        ) {
            return;
        } else {
            return signUp(userData);
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
                <AuthForm type={type} name='signup' isAllowed={isAllowed} onSubmit={signUp}>
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
                    {!isAllowed && <p className='form__error'>{ resultMessage }</p>}
                    <button 
                        type='button'
                        className={classSaveButton}
                        onClick={submitReg}
                        disabled={!isValid}
                        form={type}
                    >Зарегистрироваться</button>
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