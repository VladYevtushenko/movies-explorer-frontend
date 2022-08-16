import React, {useState} from 'react';
import './AuthInput.css'

export const AuthInput = ({
    lableText,
    type,
    name,
    minLength,
    maxLength,
    required,
}) => {

    const [errMessage, setErrMessage] = useState();
    const handleInput = (evt) => {
        setErrMessage(evt.target.validationMessage);
    };

    return (
        <>
            <label className='input input__label'>
                {lableText}
                <input 
                    className='input input__input'
                    type={type}
                    name={name}
                    minLength={minLength}
                    maxLength={maxLength}
                    required={required}
                    onChange={handleInput}
                />
                <span className='input__error'>
                    {errMessage}
                </span>
            </label>
            
        </>
    );
};