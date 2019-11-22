import React from 'react';
import useLogin from './useLogin';
import './Login.css';

const Login = (props) => {
    const {inputs, user, isAuthenticated, handleInputChange, handleSubmit} = useLogin();
    return (
        <div className='login-container'>
            {
                isAuthenticated ? props.history.push('/') : null
            }
            <div className='login-form'>
                <h2 className='login-header'>Welcome, sign in below</h2>
                <div className='section' style={{marginTop: '75%'}}>
                    <input type="email" name="email" onChange={handleInputChange} value={inputs.email}
                           required/>
                    <label className='login-label' htmlFor="username"><span
                        className='login-label-content'>Username</span></label>
                </div>
                <div className='section'>
                    <input type="password" name="password" onChange={handleInputChange} value={inputs.password}
                           required/>
                    <label className='login-label' htmlFor="password"><span
                        className='login-label-content'>Password</span></label>
                </div>
                <div>
                    <button 
                    onClick={handleSubmit}
                    className='general_btn'>
                        Sign in
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default Login;
