import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import { NOT_FOUND, NOT_FOUND_MESSAGE } from '../../consts/consts';

export const NotFound = () => {
    return (
        <div className='not-found'>
            <h2 className='not-found__title'>{NOT_FOUND}</h2>
            <p className='not-found__subtitle'>{NOT_FOUND_MESSAGE}</p>
            <Link to='/' className='not-found__return'>Назад</Link>
        </div>
    );
};