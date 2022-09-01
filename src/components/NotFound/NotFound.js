import React from 'react';
import './NotFound.css';
import { NOT_FOUND, NOT_FOUND_MESSAGE } from '../../consts/consts';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className='not-found'>
            <h2 className='not-found__title'>{NOT_FOUND}</h2>
            <p className='not-found__subtitle'>{NOT_FOUND_MESSAGE}</p>
            <p className='not-found__return' onClick={handleBack}>Назад</p>
        </div>
    );
};