import React from 'react';
import './AuthForm.css';


export const AuthForm = ({children, type}) => {
    return (
        <form className='auth-Form' form={type}>
            {children}
        </form>
    );
};