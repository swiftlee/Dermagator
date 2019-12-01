import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


const GeneralForm = () => {
    return (
        <div className='border-primary border p-4 m-3'>
            <h2> *this should appear when "General" is clicked* </h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label column=''>Email</Form.Label>
                    <Form.Control type="email" placeholder="Edit email"/>
                    <Form.Text className="text-muted">
                        Current email: admin@admin.com
                    </Form.Text>
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
                    <Form.Text className="text-muted">
                        Current name: First Last
                    </Form.Text>
                </Form.Group>

                <Button variant="info" type="submit">
                    Save
                </Button>
            </Form>
        </div>
    );
};

export default GeneralForm;
