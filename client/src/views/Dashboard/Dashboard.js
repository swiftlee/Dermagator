import React from 'react';
import './Dashboard.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import Editor from '../../components/Admin/Editor/Editor';
import AccountSettings from '../../components/Admin/AccountSettings/AccountSettings';
import jwt from 'jsonwebtoken';


const Dashboard = () => {
    const token = localStorage.getItem('jwtToken');
    const decoded = jwt.decode(token.substring(7, token.length).trim());
    return (
        <div className="wide-container">

            {/* <NavBar items={navItems["admin-bar"]}/> */}

            <AccountSettings token={decoded}/>
            <Editor token={decoded}/>

        </div>

    );
};

export default Dashboard;
