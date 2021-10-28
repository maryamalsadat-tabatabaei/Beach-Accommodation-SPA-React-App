import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaBeer, FaShuttleVan} from 'react-icons/fa'
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
            icon:<FaCocktail/>,
            title:"free coctails",
            info:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Morgem,Corporis!'
        },
        {
            icon:<FaHiking/>,
            title:"free hiking",
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Morgem,Corporis!'
        },
        {
            icon:<FaShuttleVan/>,
            title:"free shuttle",
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Morgem,Corporis! '
        },
        {
            icon:<FaBeer/>,
            title:"strongest beer",
            info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Morgem,Corporis! '
        }
    ]
        }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
            </section>
 
        )
    }
}
