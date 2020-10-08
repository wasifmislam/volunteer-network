

import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css';

const Registration = () => {
  const {volType} = useParams()
  const [volunteerWork, setVolunteerWork] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, watch, errors } = useForm({});

  
  console.log(volunteerWork)
  console.log(loggedInUser)

  useEffect(()=>{
     fetch(`http://localhost:5000/registrations`+  volType)
     .then(res => res.json())
     .then(data => setVolunteerWork(data))
  },[volType])

const onSubmit = (data) => {
    const newRegistration = {...loggedInUser, ...volunteerWork, register: data  }
    fetch ('http://localhost:5000/addRegistration', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(newRegistration)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data) {
        alert('Your registration has been complited');
      }
      console.log(data);
    })

   
 

  }


  return (
  <div >
    <form className='reg-form' onSubmit = { handleSubmit(onSubmit) } >
      < input name = "name" defaultValue={loggedInUser.name}  ref = { register({ required: true }) } placeholder="Full Name" />
      { errors.name && <span className='error'>Full Name is required</span> }

      < input name = "email" defaultValue={loggedInUser.email}  ref = { register({ required: true }) } placeholder="Email"  />
      { errors.email && <span className='error'>Email is required</span> }

      < input name = "date" ref = { register({ required: true }) } placeholder="Date"  />
     

      < input name = "description" ref = { register({ required: true }) } placeholder="Description"  />
      

      < input name = "task" defaultValue={volType} ref = { register({ required: true }) } placeholder="Task"  />
      
      <br/>
      
    
           <Link to='/events'>   <Button onSubmit = { handleSubmit(onSubmit) } type="submit">Registration</Button> </Link>
       
     </form >
    </div>
  );
};

export default Registration;

//<input  type="submit" />
// { <Link to="/events/:volType">
//                   <Button type="submit">Registration</Button> >
//                     </Link> }

//fetch('http://localhost:5000/registrations?email='+loggedInUser.email)

