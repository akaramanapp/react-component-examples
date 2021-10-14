import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const EmailForm = () => {
    const [mail, setEmail] = useState('');
    const [body, setBody] = useState('');

    return (
        <Form style={{ margin: 10 }}>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={(text) => setEmail(text.target.value)} placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control onChange={(text) => setBody(text.target.value)} as="textarea" rows={3} />
            </Form.Group>
        </Form>
    );
};

export default EmailForm;