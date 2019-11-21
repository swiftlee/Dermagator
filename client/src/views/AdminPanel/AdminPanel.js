import React from 'react';
import useAdminPanel from './useAdminPanel';
import './AdminPanel.css';

const AdminPanel = () => {
    const {handleSubmit,handleEmailChange,email,password,handlePasswordChange} = useAdminPanel();
    return (
        <div className='login-container'>
            <div className='login-form' onSubmit={handleSubmit}>
                <h2 className='login-header'>Welcome, sign in below</h2>
                <div className='section' style={{marginTop: '50%'}}>
                    <input type="email" name="username" onChange={handleEmailChange} value={email}
                           required/>
                    <label className='login-label' htmlFor="username"><span
                        className='login-label-content'>Username</span></label>
                </div>
                <div className='section'>
                    <input type="password" name="password" onChange={handlePasswordChange} value={password}
                           required/>
                    <label className='login-label' htmlFor="password"><span
                        className='login-label-content'>Password</span></label>
                </div>
                <div>
                    <button 
                    onSubmit={handleSubmit}
                    class='general_btn'>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;