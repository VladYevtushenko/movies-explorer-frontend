import React from 'react';
import './AuthTitle.css';

export const AuthTitle = ({titleText}) => {
    return (
        <>
            <h2 className='auth-title'>{titleText}</h2>
        </>
    );
};