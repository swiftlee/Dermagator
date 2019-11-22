import React, {useState} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken'
import validateContact from "./validateContact";

const useContact = () => {
    const [inputs, setInputs] = useState({email: "", subject: "", text: "", captcha: false});
    const inputValidation = validateContact(inputs);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = {
          email: inputs.email,
          subject: inputs.subject,
          text: inputs.text
        };
        axios.post("/api/contact/email", formData)
            .then(res => {
                // send success status
            });
    };

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return {
        errors: inputValidation.errors,
        isValid: inputValidation.isValid,
        handleSubmit,
        handleInputChange,
        inputs
    };
};
export default useContact;
