import React, {useState, useEffect, memo} from 'react';
import axios from 'axios';
import {Button, Modal, Form} from 'react-bootstrap';

const AdminForm = () => {

    const [users, setUsers] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');
    const [cardState, setCardState] = useState(false);

    useEffect(() => {
        updateUsers();
    });

    const updateUsers = () => {
        axios.get('/api/admin/user', {
            params: {
                email: 'FINDALL'
            }
        }).then((res) => {
            setUsers(res.data);
        });
    };

    const getUsers = () => {
        const regexp = new RegExp(searchFilter.trim().toLocaleLowerCase().replace(/\\/g, '&#92;'), 'gi');
        const userList = users.filter(user => {
            if (searchFilter.trim() !== '') {
                if (user.name) {
                    const result = user.name.trim().toLowerCase().match(regexp);
                    return result && result.length > 0;
                }
                return false
            } else
                return true;
        }).map(user => {
            return <UserRow user={user} setCardState={setCardState} cardState={cardState}/>;
        });

        return <table>{userList}</table>
    };

    return (
        <Form>
            <Form.Group>
                <Form.Label column=''>Email</Form.Label>
                <Form.Control type="text" placeholder="Search users by email..." value={searchFilter} onChange={e => setSearchFilter(e.target.value)}/>
                {getUsers}
            </Form.Group>
        </Form>
    );
};

const UserRow = memo((props) => {
    const handleClose = () => props.setCardState(false);
    const handleShow = () => props.setCardState(true);

    return (
        <div key={props.user.id}>
            <tr key={props.user.email} onClick={handleShow}>
                <td>{props.user.email}</td>
                <td>{props.user.name}</td>
            </tr>
            {props.cardState ? <ProfileCard name={props.user.name} email={props.user.email} handleClose={handleClose}
                                            show={props.cardState}/> : null}
        </div>
    );
});

const ProfileCard = (props) => {

    const handleClose = props.handleClose;
    const show = props.show;

    return <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
};

export default AdminForm;
