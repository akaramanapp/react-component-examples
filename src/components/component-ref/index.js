import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const RefComponent = () => {
    const mail = useRef();

    const clickHandle = () => {
        alert(mail.current.value)
    }

    return (
        <Form style={{ margin: 10 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={mail} type="email" placeholder="Enter email" />
            </Form.Group>
            <Button variant="primary" onClick={clickHandle}>
                Submit
            </Button>
        </Form>
    );
};

export default RefComponent;