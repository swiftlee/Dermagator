import React, {useState} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";

const AdminForm = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    const updateUsers = () => {
        axios.get('/api/admin/user', {
            params: {
                email: ''
            }
        })
    };

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label column=''>Email</Form.Label>
                <Form.Control type="email" placeholder="Edit email"/>
            </Form.Group>
        </Form>
    );
};

const ProfileCard = () => {

};

export default AdminForm;
