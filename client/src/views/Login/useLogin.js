import React, {useState} from 'react';
import axios from 'axios';
import jwt, {jwt_decode} from 'jsonwebtoken'
const useLogin = () => {
    const [inputs, setInputs] = useState({email:"", password:""});
    const setAuthToken = token => {
        if (token) {
            // apply auth token to each request if logged in
            axios.defaults.headers.common["Authorization"] = token;
        } else {
            // delete auth header
            delete axios.defaults.headers.common["Authorization"];
        }
    };
    const handleSubmit = async(event) => {
        if (event) {
            event.preventDefault();
            const email=inputs.email
            console.log(inputs.email)
            console.log(inputs.password)
            const password=inputs.password
            const body=(JSON.stringify({email,password}));
            const response= await fetch('/api/admin/login', {
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body:body
            }).then(function(response){
                const {token} = response.body;
                localStorage.setItem("jwtToken", token);
            // set token to auth header
                setAuthToken(token);
            // decode token to get user
             //const decoded = jwt_decode(token);

            })
            
        }
    };
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    };
    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
};
export default useLogin;