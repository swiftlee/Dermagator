import React from 'react';
import './Dashboard.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import NavBar from "../../components/Header/NavBar";
import navItems from "../../utils/navItems";
import Editor from '../../components/Admin/Editor/Editor';
import AccountSettings from '../../components/Admin/AccountSettings/AccountSettings';
import UserSettings from '../../components/Admin/UserSettings/UserSettings';



const Dashboard= () => {
    return (
        <div class="wide-container">

            {/* <NavBar items={navItems["admin-bar"]}/> */}
            
            <AccountSettings/>
            <Editor/>
            
        </div>

    );
}

export default Dashboard;