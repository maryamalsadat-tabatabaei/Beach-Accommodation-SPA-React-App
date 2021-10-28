import React from 'react';
import Hero from '../componenets/Hero';
import Banner from '../componenets/Banner'
import { Link } from 'react-router-dom';
import RoomsContainer from '../componenets/RoomsContainer';
export const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms" subitle="">
                <Link to="/" className="btn-primary">
                    Return home
               </Link>
            </Banner>
        </Hero>
        <RoomsContainer/>
        </>
    )
}