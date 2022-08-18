import React from 'react';
import './AuthBox.css';

export const AuthBox = ({children}) => {
    return (
        <div className='auth-box'>
            {children}
        </div>
    );
};