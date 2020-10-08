



import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Task = (props) => {
    console.log(props)
    const{title,image, volType, color} = props.task;
    

    return (
    <div className = "col-md-3">
            
      <Col>
        
         <Card style={{ width: '18rem', backgroundColor:'yellowgreen'}}>
            <Link to={`/registration/${volType}`}>
               <Card.Img className="img-fluid"    style={{ width:'18rem'}}  src={image} />
            </Link>
               <Card.Body>
                  <Card.Title><h3>{title}</h3> </Card.Title>
               </Card.Body>
         </Card>
        
      </Col>
     
 </div>
    );
};


export default Task;


















