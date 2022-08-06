import React from 'react';
import { Header } from '../Header/Header';
import './Main.css';
import { Promo } from './Promo/Promo'

export const Main = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Promo />
            </main>
        </>
    );
};
