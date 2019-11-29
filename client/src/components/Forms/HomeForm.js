import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



const HomeForm= () => {
    return (
            <div className='border-primary border p-4 m-3'>
                <h2> *this should appear when "Home" is clicked* </h2>
                <Form>
                    <Form.Group>
                        <Form.Label column=''>Home Title</Form.Label>
                        <Form.Control placeholder="Edit title" />
                        <Form.Text className="text-muted">
                            Current title: Welcome to DermaGator
                        </Form.Text>
                    </Form.Group>

                <p> *placeholder for the carousel editor*</p>

                <p> *placeholder for the 'about us' preview editor*</p>

                <p> *placeholder for the 'proof of concept' preview editor*</p>

                <p> *placeholder for the 'our products' preview editor*</p>

                <p> *placeholder for the 'contact us' preview editor*</p>
                    

                    <Button variant="info" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        );
    };
    
    export default HomeForm;
