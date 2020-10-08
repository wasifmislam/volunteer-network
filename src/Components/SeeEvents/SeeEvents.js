
import React from 'react';

import { Card} from 'react-bootstrap';
const SeeEvents = (props) => {
    console.log(props.reg)
    return (
        <div className="col-md-6">
            
                <Card>
                <Card.Body>
                    <h1>{props.reg.name}</h1>
                    <h4>{props.reg.register.task}</h4>
                     <img src={props.reg.image}/>
                </Card.Body>
                </Card>
            
        </div>
    );
};

export default SeeEvents;