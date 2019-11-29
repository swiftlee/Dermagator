import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



const HomeForm= () => {
    return (
            <div>
                <h2> *this should appear when "Home" is clicked* </h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Home Title</Form.Label>
                        <Form.Control placeholder="Edit title" />
                        <Form.Text className="text-muted">
                            Current title: Welcome to DermaGator
                        </Form.Text>
                    </Form.Group>

                    

                    <Button variant="info" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        );
    }
    
    export default HomeForm;