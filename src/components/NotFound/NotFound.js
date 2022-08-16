import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
    return (
        <div className='not-found'>
            <h2 className='not-found__title'>404</h2>
            <p className='not-found__subtitle'>Страница не найдена</p>
            <Link to='/' className='not-found__return'>Назад</Link>
        </div>
    );
};