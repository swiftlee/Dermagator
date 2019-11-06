import React from 'react';
import useAdminPanel from './useAdminPanel';
import './AdminPanel.css';
const AdminPanel = () => {
    const {inputs, handleInputChange, handleSubmit} = useAdminPanel();
    return (
        <body style={{backgroundColor: 'blue'}}>
            <div className="AdminPanel">
                <h1 className="header">Welcome User!</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" onChange={handleInputChange} value={inputs.username} required/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
                    </div>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </body>
    );
}

export default AdminPanel;