import React from 'react';
import './AuthBtn.css';
export const AuthBtn = ({btnText}) => {
    return (
        <button
            type='button'
            className='button'
        >
            {btnText}
        </button>
    );
};