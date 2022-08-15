import React from 'react';
import './AuthInput.css'

export const AuthInput = ({
    lableText,
    type,
    name,
    minlength,
    maxlength,
    required,
}) => {
    return (
        <lable className='input input__label'>
            {lableText}
            <input 
                className='input input__input'
                type={type}
                name={name}
                minlength={minlength}
                maxlength={maxlength}
                required={required}
            />
        </lable>
    );
};