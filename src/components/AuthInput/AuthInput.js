import React from 'react';
import './AuthInput.css'

export const AuthInput = ({lableText}) => {
    return (
        <lable className='input input__label'>
            {lableText}
            <input className='input input__input'/>
        </lable>
    );
};