import React, { Component } from 'react';
//import items from './data';
import Client from 'contentful';


const RoomContext=React.createContext();

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false

    };
    //getdata
getData=async()=>{
    try{
        let response=await Client.getEntries({
            content_type:"houseResort",
            //order:"sys.createdAt"
            order:'-fields.price'
        });
        let rooms=this.formatData(response.items);
        let featuredRooms=rooms.filter(room=>room.featured=== true);
        let maxPrice=Math.max(...rooms.map(item=>item.price))
        let maxSize=Math.max(...rooms.map(item=>item.size))

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        });
    }
    catch(error){
        console.log(error);

    }
}

    componentDidMount(){
        this.getData()
    }
    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id;
            let images= item.fields.images.map(image=>
                image.fields.file.url);
            let room={...item.fields,images,id};
            return room;
        });
        return tempItems
    }
    getRoom=slug=>{
        let tempRooms=[...this.state.rooms];
        const room=tempRooms.find(room=> room.slug === slug);
        return room;
    }
handleChange=event=>{
    const target=event.target;
    const name=event.target.name;
    const value=target.type ==="checkbox"?
    target.checked:target.value;
    this.setState(
        {
            [name]:value
        },
        this.filterRooms
    )

};
filterRooms=()=>{
    let tempRooms=[...this.state.rooms];
    //transform value
    let capacity=parseInt(this.state.capacity);
    let price=parseInt(this.state.price);

    //filter by type
    if(this.state.type !=='all'){
        tempRooms=tempRooms.filter(room=>room.type === this.state.type);
    }
    //filter by capacity
    if(capacity !==1){
        tempRooms=tempRooms.filter(room=>room.capacity >= capacity);
    }
    //filter by price
    tempRooms=tempRooms.filter(room=>room.price <= price);
    //filter by size
    tempRooms=tempRooms.filter(room=> room.size >= this.state.minSize && room.size <= this.state.maxSize);
    //filter by breakfast
    if(this.state.breakfast){
        tempRooms=tempRooms.filter(room=> room.breakfast ===true);
    }
    //filter by pets
    if(this.state.pets){
        tempRooms=tempRooms.filter(room=> room.pets ===true);
    }
    //change state
        this.setState({
            sortedRooms:tempRooms
        });
    }

    render() {
        return (
            <RoomContext.Provider 
            value={{...this.state,
            getRoom: this.getRoom, 
            handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer=RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}
export {RoomContext,RoomProvider,RoomConsumer};