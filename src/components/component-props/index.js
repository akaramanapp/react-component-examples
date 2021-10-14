import React from 'react';
import { Card } from 'react-bootstrap'

const ComponentProps = (props) => {
    return (
        <Card style={{ margin: 10, width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ComponentProps;