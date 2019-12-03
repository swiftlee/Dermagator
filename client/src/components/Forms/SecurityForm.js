import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SecurityForm = () => {
    return (
        <div className='border-primary border p-4 m-3'>
            <h1>Security</h1>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Old Password
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        New Password
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={4}>
                        Confirm New Password
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Button type="submit">
                    Submit
                </Button>

            </Form>

        </div>
    );
};

export default SecurityForm;
