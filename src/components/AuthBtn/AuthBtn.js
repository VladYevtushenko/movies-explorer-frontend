import React from 'react';
import './AuthBtn.css';
import classNames from 'classnames';

export const AuthBtn = ({btnText, onClick, isValid, resultMessage, type}) => {
    const classSaveButton = classNames(`button`, {
        button_disabled: !isValid,
    });

    return (
        <>
            <span className='button__error'>{resultMessage}</span>
                <button
                    type='submit'
                    className={classSaveButton}
                    onClick={onClick}
                    disabled={isValid}
                    form={type}
                >
                    {btnText}
                </button>
        </>
    );
};