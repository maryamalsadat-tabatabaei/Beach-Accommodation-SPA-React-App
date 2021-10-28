import React from 'react'
import { Link } from 'react-router-dom'
import PropsTypes from 'prop-types';
import defaultImg from "../images/room-1.jpeg";

export default function Room({room}) {
    const{name,slug,images,price}=room;
    console.log(room)

    return (
        <article className="room">
            <div className="img-container">
                <img sc={images[0] || defaultImg} alt="single room" />
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per night</p>
                </div>
                <Link to={`/rooms/${slug}`}
                className="btn-primary room-link">
                    Features
                </Link>
            </div>
            <p className="room-info">{name}</p>
        </article>
    );
}

Room.PropsTypes={
    room:PropsTypes.shape({
      name:PropsTypes.string.isRequired,
      slug:PropsTypes.string.isRequired, 
      price:PropsTypes.number.isRequired, 
      images:PropsTypes.arrayOf(PropsTypes.string).isRequired  
    })
}