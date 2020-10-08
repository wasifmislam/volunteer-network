
import React, { useEffect, useState } from 'react';

import Task from '../Task/Task'



const Home = () => {
    const [volunteer, setVolunteer] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/voluntaryWork")
        .then(res => res.json())
        .then(data => setVolunteer(data))
    }, [])
   
    return (
        <div className="row">
            {
                volunteer.map(vl => <Task
                    task={vl}
                    key={vl.volType}
                   
                    >
                </Task>)
            }
        </div>
    );
};

export default Home;