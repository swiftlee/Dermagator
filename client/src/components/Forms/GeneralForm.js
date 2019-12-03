import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const GeneralForm = () => {
    

    return (
        <div className='border-primary border p-4 m-3'>
            <h1>General</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label column=''>Email</Form.Label>
                    <Form.Control type="email" placeholder="Edit email"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label column=''>Name</Form.Label>
                    <div>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="First name"/>
                            </Col>

                            <Col>
                                <Form.Control placeholder="Last name"/>
                            </Col>
                        </Form.Row>
                    </div>
                </Form.Group>

                <Button type="submit">
                    Save
                </Button>
            </Form>
        </div>
    );

};

export default GeneralForm;
