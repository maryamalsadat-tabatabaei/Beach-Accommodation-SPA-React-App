import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
import { withRoomConsumer } from '../context'

function RoomsContainer({context}) {
    const{loading,sortedRooms,rooms}=context;
    if (loading){
        return <Loading/>
    }
    return(
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms}/>
        </div>
    );
}


export default withRoomConsumer(RoomsContainer);




/*

import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
import { RoomConsumer } from '../context'

export default function RoomsContainer() {
    return (
        <RoomConsumer>
            {value =>{
                const{loading,sortedRooms,rooms}=value;
                if (loading){
                    return <Loading/>
                }
                return(
                    <div>
                        Hello from rooms RoomsContainer
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms}/>
                    </div>
                );
            }}
        </RoomConsumer>
        
    );
}
*/