import React, {useState} from 'react';

const AddUserForm = (props) => {

    const [inputs, setInputs] = useState({name: '', email: '', password: ''});

    const handleInputChange = (event) => {
      event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

};
