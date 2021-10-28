import React from 'react'
import {useContext}from 'react'
import {RoomContext} from '../context'
import Title from "../componenets/Title"
//get all unique values
const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context=useContext(RoomContext)
    //console.log(context);

    //get unique types
    let types=getUnique(rooms,'type');
    types=['all',...types]

    //map to jsx
    types=types.map((item,index)=>{
        return <option value={item} key={index}>{item}</option>
    })
    let people=getUnique(rooms,'capacity');
    people=people.map((item,index)=>{
        return <option key={index} value={item}>
            {item}
        </option>
    })

    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                <div className="form-group">
                   <label htmlFor="type">room type</label>
                    <select name="type"
                    id="type" value={context.type}
                    className="form-control"
                    onChange={context.handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                   <label htmlFor="capacity">Guests</label>
                    <select name="capacity"
                    id="capacity" value={context.type}
                    className="form-control"
                    onChange={context.handleChange}>
                        {people}
                    </select>
                </div>
                <div className="form-group">
                   <label htmlFor="price">room price 4{context.price}</label>
                    <input type="range"
                    name="price" id="price" 
                    className="form-control"
                    min={context.minPrice}
                    max={context.maxPrice}
                    value={context.price}
                    onChange={context.handleChange} /> 
                </div>
                <div className="form-group">
                   <label htmlFor="size">room size</label>
                   <div className="size-inputs">
                        <input type="number"
                        name="minsize" id="size" 
                        className="size-input"
                        value={context.minSize}
                        onChange={context.handleChange} />
                        <input type="number"
                        name="maxsize" id="size" 
                        className="size-input"
                        value={context.maxSize}
                        onChange={context.handleChange} />
                    </div> 
                </div>
                <div className="form-group">
                   <div className="single-extra">
                        <input type="checkbox"
                        name="breakfast" id="breakfast" 
                        checked={context.breakfast}
                        onChange={context.handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                   </div>
                   <div className="single-extra">
                        <input type="checkbox"
                        name="pets" id="pets" 
                        checked={context.pets}
                        onChange={context.handleChange} />
                        <label htmlFor="pets">pets</label>
                   </div>
                </div>
            </form>
        </section>
    )
}
