import React from 'react';
import { Header } from '../Header/Header';
import './Main.css';
import { Promo } from './Promo/Promo'
import { AboutProject } from './AboutProject/AboutProject'
import { Techs } from './Techs/Techs';
import { AboutMe } from './AboutMe/AboutMe';
import { Footer } from '../Footer/Footer';

export const Main = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <Footer />
        </>
    );
};
