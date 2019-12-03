import React, {useState, useEffect, memo} from 'react';
import axios from 'axios';
import {Button, Modal, Form} from 'react-bootstrap';
import isEmpty from 'is-empty';
import Validator from 'validator';
import * as jwt from "jsonwebtoken";

const AdminForm = (props) => {

    const [users, setUsers] = useState([]);
    const [searchFilter, setSearchFilter] = useState('');
    const [cardState, setCardState] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [userPerms, setUserPerms] = useState([]);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const token = props.jwt;
    const decoded = jwt.decode(token.slice(7).trim());

    useEffect(() => {
        updateUsers();
    }, []);

    const updateUsers = () => {
        axios.get('/api/admin/user', {
            params: {
                email: 'FINDALL'
            }
        }).then((res) => {
            console.log(res.data);
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
            return <UserRow user={user} setCardState={setCardState} cardState={cardState} update={updateUsers}
                            token={token} decoded={decoded}/>;
        });

        return <div>{userList}</div>
    };

    const handleSubmit = async () => {
        await updateErrors();
        if (Object.entries(errors).length === 0) {
            const data = {
                name: name,
                email: email,
                password: password,
                permissions: userPerms
            };
            axios.post('/api/admin/create', data).then(res => {
                if (res.status === 200) {
                    console.log('new user created with data: ', data);
                }
            }).catch(err => console.error(err));
        }
    };

    const updateErrors = () => {
        const errs = {};
        setSubmitted(false);
        if (name.trim() === '')
            errs.name = 'You must specify a name.';
        else if (!Validator.isEmail(email))
            errs.email = 'You must specify a valid email address.';
        else if (password !== password1)
            errs.password = 'Your passwords must match.';
        else if (isEmpty(password) || isEmpty(password1))
            errs.password = 'You must enter a password.';

        setErrors(errs);
    };

    const getError = () => {
        let err = null;
        Object.entries(errors).some(entry => {
            if (entry[1] && !isEmpty(entry[1])) {
                err = <div className='text-danger'>{entry[1]}</div>;
                return true;
            }
        });

        return err;
    };

    return (
        <div>
            <div className='border-primary border p-4 m-3'>
                <Form>
                    <Form.Group>
                        <Form.Label column=''><h2>Add New Users</h2></Form.Label>
                        {
                            !submitted && !isEmpty(errors) ? getError() : null
                        }
                        <br/>
                        <Form.Label column=''><strong>Name</strong></Form.Label>
                        <Form.Control type="text" placeholder="Enter a name..."
                                      value={name}
                                      onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column=''><strong>Email</strong></Form.Label>
                        <Form.Control type="email" placeholder="Enter an email..."
                                      value={email}
                                      onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column=''><strong>Password</strong></Form.Label>
                        <Form.Control type="text" placeholder="Enter a password..."
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}/>
                        <Form.Control className='mt-2' type="text" placeholder="Confirm password..."
                                      value={password1}
                                      onChange={e => setPassword1(e.target.value)}/>
                        <Permissions updatePermissions={setUserPerms} permissions={[null, null, null, null]}/>
                        <Button variant="primary" onClick={handleSubmit} className='mt-3'>
                            Create
                        </Button>
                    </Form.Group>
                </Form>
            </div>
            <div className='border-primary border p-4 m-3'>
                <Form>
                    <Form.Group>
                        <Form.Label column=''><h2>Modify Users</h2></Form.Label>
                        <Form.Control type="text" placeholder="Search users by name and modify their information..."
                                      value={searchFilter}
                                      onChange={e => setSearchFilter(e.target.value)}/>
                    </Form.Group>
                </Form>
                <table className='table table-striped table-hover'>
                    {getUsers()}
                </table>
            </div>
        </div>
    );
};

const UserRow = memo((props) => {
    const handleClose = () => props.setCardState(false);
    const handleShow = () => props.setCardState(true);
    const update = () => props.update();

    return (
        <div key={props.user.id}>
            <tr>
                <td>
                    <b>Email</b>
                </td>
                <td>
                    <b>Name</b>
                </td>
            </tr>
            <tr key={props.user.email} onClick={handleShow} style={{cursor: 'pointer'}}>
                <td>{props.user.email}</td>
                <td>{props.user.name}</td>
            </tr>
            {props.cardState ? <ProfileCard name={props.user.name} email={props.user.email} handleClose={handleClose}
                                            show={props.cardState} update={update} token={props.token} decoded={props.decoded}/> : null}
        </div>
    );
});

const ProfileCard = (props) => {

    const handleClose = props.handleClose;
    const show = props.show;
    const [errors, setErrors] = useState({});

    const handleSubmit = () => {
        setSubmitted(false);
        setErrors({});
        const data = {
            newName: name,
            email: props.email,
            newEmail: email,
            password: password,
            password1: password1,
            permissions: userPerms,
            token: props.token
        };

        if (!isEmpty(data.newEmail) && !Validator.isEmail(data.newEmail)) {
            setErrors({email: 'Please enter a valid email address.'});
        } else if (password.trim() !== password1.trim()) {
            setErrors({email: 'Passwords do not match.'});
        } else {
            axios.post('/api/admin/modify', data).then(res => {
                if (res.status === 200)
                    setError('');
            }).catch(err => setError('error')).finally(() => {
                setSubmitted(true);
                props.update();
            });
        }

        console.log(errors);
    };

    const getError = () => {
        let err = null;
        Object.entries(errors).some(entry => {
            if (entry[1] && !isEmpty(entry[1])) {
                err = <div className='text-danger'>{entry[1]}</div>;
                return true;
            }
        });

        return err;
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [userPerms, setUserPerms] = useState([]);

    return <>
        <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.name}'s Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {submitted && error === '' ?
                    <span
                        className='text-success'>Successfully modified <strong>{props.name}</strong>'s information!</span> : (submitted && error !== '' ?
                        <span className='text-danger'>There was an error updating this user's profile.</span> : null)}
                {
                    !submitted && !isEmpty(errors) ? getError() : null
                }
                <div className='p-2 border-primary border-bottom'>
                    Current name: {props.name}
                    <br/>
                    Current email: {props.email}
                </div>
                <br/>
                <Form>
                    <Form.Group>
                        <Form.Label column=''><strong>Modify Name</strong></Form.Label>
                        <Form.Control type="text" placeholder="Enter a new name..."
                                      value={name}
                                      onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column=''><strong>Modify Email</strong></Form.Label>
                        <Form.Control type="email" placeholder="Enter a new email..."
                                      value={email}
                                      onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label column=''><strong>Modify Password</strong></Form.Label>
                        <Form.Control type="text" placeholder="Enter a new password..."
                                      value={password}
                                      onChange={e => setPassword(e.target.value)}/>
                        <Form.Control className='mt-2' type="text" placeholder="Confirm new password..."
                                      value={password1}
                                      onChange={e => setPassword1(e.target.value)}/>
                    </Form.Group>
                </Form>
                <Permissions updatePermissions={setUserPerms} permissions={props.decoded.permissions} shift={true}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
};

const Permissions = (props) => {

    const permissions = [
        {'super': 'Has permission to edit anything from user accounts to the website itself.'},
        {'create': 'Permission to allow an admin to create new users.'},
        {'user-edit': 'Permission to allow an admin to edit users.'},
        {'page-edit': 'Permission to allow an admin to edit text and images on pages.'},
    ];

    const [userPerms, setUserPerms] = useState(props.permissions);
    const [switches, setSwitches] = useState([userPerms.includes('super'), userPerms.includes('create'), userPerms.includes('user-edit'), userPerms.includes('page-edit')]);

    const updatePermissions = () => {
        const perms = [];
        switches.forEach((s, index) => {
            if (s) {
                perms.push(Object.keys(permissions[index])[0]);
            }
        });
        setUserPerms(perms);
        props.updatePermissions(userPerms)
    };

    useEffect(() => {
        updatePermissions();
    }, [switches]);

    const handleSwitchChange = i => () => {
        let copy = [...switches];
        copy[i] = !copy[i]; // flip flop between 1 and 0
        setSwitches(copy);
    };

    return <div className='mt-3'>{permissions.map((permission, index) => {
        let key = Object.keys(permission)[0];
        key = key.charAt(0).toUpperCase() + key.slice(1);
        return <Form.Check
            type="switch"
            checked={switches[index] === true}
            id={props.shift ? `user-switch${index}` : `custom-switch${index}`}
            onChange={handleSwitchChange(index)}
            label={key + ": " + Object.values(permission)[0]}/>
    })}</div>;
};

export default AdminForm;
