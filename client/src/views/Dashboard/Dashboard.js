import React from 'react';
import './Dashboard.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import Editor from '../../components/Admin/Editor/Editor';
import AccountSettings from '../../components/Admin/AccountSettings/AccountSettings';



const Dashboard= () => {
    return (
        <div className="wide-container">

            {/* <NavBar items={navItems["admin-bar"]}/> */}
            
            <AccountSettings/>
            <Editor/>
            
        </div>

    );
};

export default Dashboard;
