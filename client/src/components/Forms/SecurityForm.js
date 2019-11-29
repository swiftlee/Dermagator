import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SecurityForm = () => {
    return (
        <div className='border-primary border p-4 m-3'>
            <h2> *this should appear when "Security" is clicked* </h2>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={4}>
                        Old Password
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={4}>
                        New Password
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={4}>
                        Confirm New Password
                    </Form.Label>
                    <Col sm={7}>
                        <Form.Control type="password" placeholder="Password"/>
                    </Col>
                </Form.Group>

                <Button variant="info" type="submit">
                    Submit
                </Button>

            </Form>

        </div>
    );
};

export default SecurityForm;
