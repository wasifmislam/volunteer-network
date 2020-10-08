import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import SeeEvents from '../SeeEvents/SeeEvents';


const Events = ( ) => {
    // const {volType} = useParams()
    const [events, setEvents] = useState([]);
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/registrations' )
        .then(res => res.json())
        .then(data => setEvents(data));
    }, [])

    return (
        <div >
            <h3>You have registered: {events.length} events</h3>
             
             { 
               events.map(reg => <SeeEvents reg={reg}></SeeEvents>)
             
             }
           
            
        </div>
    );
};

export default Events;

