import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg";
import Hero from '../componenets/Hero'
import Banner from "../componenets/Banner"
import { Link } from 'react-router-dom';
import {RoomContext} from "../context"
import StyledHero from '../componenets/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        //console.log(this.props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType=RoomContext;
    render() {
        const {getRoom} =this.context
        const room=getRoom(this.state.slug)
        if(!room){
            return(
                <div className="error">
                    <h3>no such rom could be found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            );
        }
        const [mainImg, ...defaultImg]=room.images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${room.name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>

                </Banner>
            </StyledHero>
            <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item,index)=>{
                    return <img key={index} src={item} alt={room.name} />
                })
                }
            </div>
            <div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>
                            details
                        </h3>
                        <p>{room.description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${room.price}</h6>
                        <h6>size : ${room.size} SQFT</h6>
                        <h6>max capacity : {
                            room.capacity >1 ? `${room.capacity} people` :
                            `${room.capacity} person`
                            }</h6>
                        <h6>{
                            room.pets >1 ? "pets allowed" :
                            "no pets allowed"
                            }</h6>
                        <h6>{
                            room.breakfast &&  "free breakfast included"
                            }</h6>
                    </article>
                </div>
            </div>
            </section>
            <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                    {room.extras.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                </ul>

            </section>
            </>
        )
    }
}

