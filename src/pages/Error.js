import React from 'react';
import Hero from '../componenets/Hero';
import Banner from '../componenets/Banner';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <Hero >
        <Banner title="404" subitle="Page not found">
            <Link to="/" className="btn-primary">
                Return Home
           </Link>
        </Banner>
    </Hero>
    )
}
