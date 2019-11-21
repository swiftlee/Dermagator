import React, {useState} from 'react'
import { createLogicalNot } from 'typescript';
const login=()=>{

}
const useAdminPanel = () => {
    const [email, setEmail] = useState({});
    const [password,setPassword]=useState({});
    const handleSubmit = async(event) => {
        if (event) {
            event.preventDefault();
            const response=await fetch('/api/admin/login', {
                method: 'GET',
                body:JSON.stringify({email, password})
            })
            const {jwt_token}=await response.json()
            await login({jwt_token});

        }
    };
    const handleEmailChange = (event) => {
        event.persist();
        setEmail(email => ({...email, [event.target.name]: event.target.value}));
        
    };
    const handlePasswordChange=(event)=>{
        event.persist();
        setPassword(password=>({...password,[event.target.name]: event.target.value}));
    };
    return {
        handleSubmit,
        handleEmailChange,
        email,
        password,
        handlePasswordChange
    };
};
export default useAdminPanel;