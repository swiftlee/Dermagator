import React from 'react';
import useAdminPanel from './useAdminPanel';

const AdminPanel = () => {
    const {inputs, handleInputChange, handleSubmit} = useAdminPanel();
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username</label>
                <input type="text" name="username" onChange={handleInputChange} value={inputs.username} required/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
            </div>
            <button type="submit">Log in</button>
        </form>
    );
}

export default AdminPanel;