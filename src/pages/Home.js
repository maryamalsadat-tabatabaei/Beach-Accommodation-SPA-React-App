import React from 'react';
import Hero from '../componenets/Hero';
import Banner from '../componenets/Banner';
import Services from '../componenets/Services';
import FeaturedRooms from '../componenets/FeaturedRooms';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
            <Banner title="luxurious rooms" subitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
               </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}
