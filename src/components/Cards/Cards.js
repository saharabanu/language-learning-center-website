import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Cards = (props) => {
    const{img,name,price,description,}=props.card;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={img}/>
          <Card.Body>
            <Card.Title>Course Language Name: {name}</Card.Title>
            <Card.Text>
                      {description}
            </Card.Text>
            <p>Course Price : ${price}</p>
           
          </Card.Body>
          
        </Card>
      </Col>
    );
};

export default Cards;