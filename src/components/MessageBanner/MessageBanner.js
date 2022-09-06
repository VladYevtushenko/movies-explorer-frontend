import classNames from 'classnames';
import React from 'react';
import './MessageBanner.css';

export const MessageBanner = ({ isOpen, onClose, resultMessage }) => {
    const banner = classNames(`banner`, {
        banner_opened: isOpen,
    });

    const handleMouseClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={banner}
            onMouseDown={handleMouseClick}
        >
            <div className='banner__container'>
                <button
                    className='banner__close-btn'
                    type='button'
                    onClick={() => onClose(false)}
                    aria-label='close'
                />
                <h2 className='banner__message'>
                    {resultMessage}
                </h2> 
            </div>
        </div>
    );
};