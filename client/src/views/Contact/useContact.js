import React, {useState} from 'react';
import axios from 'axios';
import validateContact from "./validateContact";

const useContact = () => {
    const [inputs, setInputs] = useState({email: '', subject: '', text: ''});
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const [token, setToken] = useState('');
    const [success, setSuccess] = useState(false);

    const updateToken = tkn => {
        setToken(tkn);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!success) {
            const inputValidation = validateContact(inputs, token, false);
            setErrors(inputValidation.errors);
            setIsValid(inputValidation.isValid);
            const formData = {
                email: inputs.email,
                subject: inputs.subject,
                text: inputs.text,
                valid: inputValidation.isValid,
                token: token
            };

            if (inputValidation.isValid) {
                axios.post("/api/contact/email", formData)
                    .then(res => {
                        if (res.status === 200)
                            setSuccess(true);
                        else
                            setSuccess(false);
                    })
                    .catch(err => {
                        setSuccess(false);
                        console.log(err);
                    });
            }
        } else {
            const inputValidation = validateContact(inputs, token, true);
            setErrors(inputValidation.errors);
        }
    };

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };

    return {
        handleSubmit,
        handleInputChange,
        updateToken,
        inputs,
        errors,
        isValid,
        success
    };
};
export default useContact;
