import React from 'react';
import './AuthForm.css';


export const AuthForm = ({children, type, onSubmit}) => {
    return (
        <form className='auth-Form' form={type} onSubmit={onSubmit}>
            {children}
        </form>
    );
};