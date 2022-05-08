import React from "react";
import {Card, Button} from "react-bootstrap"

function displayrests(props){
    return (
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imgsrc} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>

    // <div className={props.class}>
    //     <h2>{props.name}</h2>
    //     <img src={props.imgsrc} className="test-img" alt="restaurent"/>
    // </div>
    )
}

export default displayrests;