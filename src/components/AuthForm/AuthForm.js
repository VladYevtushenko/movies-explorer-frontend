import React from 'react';
import './AuthForm.css'

export const AuthForm = ({children}) => {
    return (
        <form className='auth-Form'>
            {children}
        </form>
    );
};