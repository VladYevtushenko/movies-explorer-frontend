import React from 'react';
import './AuthInput.css'

export const AuthInput = ({
    lableText,
    type,
    name,
    minLength,
    maxLength,
    required,
    pattern,
    onChange,
    messageError,
    userData,
}) => {

    return (
        <>
            <label className='input input__label'>
                {lableText}
                <input 
                    className='input__input'
                    type={type}
                    name={name}
                    minLength={minLength}
                    maxLength={maxLength}
                    required={required}
                    onChange={onChange}
                    value={userData}
                    pattern={pattern}
                />
                <span className='input__error'>
                    {messageError}
                </span>
            </label>
            
        </>
    );
};