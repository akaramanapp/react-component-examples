import React from 'react';
import { Card } from 'react-bootstrap'

const Campaign = (props) => {    
    return (
        <Card
            bg={'info'}
            style={{ width: '18rem', margin: 10 }}
            className="mb-2"
        >
            <Card.Header>{props.header}</Card.Header>
            <Card.Body>
                <Card.Title> {props.title} </Card.Title>
                <Card.Text onClick={props.onClick}>
                    {props.body}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Campaign;