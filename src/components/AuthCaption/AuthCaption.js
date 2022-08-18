import React from 'react';
import './AuthCaption.css';
import { Link } from 'react-router-dom';

export const AuthCaption = ({text, linkText, linkTo}) => {
    return (
        <p 
            className='caption caption_text'
        >
            {text}
            <Link
                className='caption caption_link'
                to={linkTo}
            >
                {linkText}
            </Link>
        </p>
    );
};