import React from 'react';
import './Dashboard.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import Editor from '../../components/Admin/Editor/Editor';
import AccountSettings from '../../components/Admin/AccountSettings/AccountSettings';
import useLogin from "../Login/useLogin"
import {Redirect} from 'react-router-dom';
import Button from "react-bootstrap/Button"
import jwt from 'jsonwebtoken';

const Dashboard = () => {
    const {logout, returnAuth} = useLogin();
    if (returnAuth()) {
        console.log(returnAuth());
        return (
            <Redirect to="/login"/>
        )
    }
    const token = localStorage.getItem("jwtToken");
    let decoded;
    if (token) {
        decoded = jwt.decode(token.substring(7, token.length).trim());
    } else {
        return (
            <Redirect to="/login"/>
        )
    }
    const time = Date.now() / 1000;
    if (decoded.exp > time) {
        return (
            <div className="wide-container">
                <Button onClick={logout} className='float-right mt-2'>Log out</Button>
                {/* <NavBar items={navItems["admin-bar"]}/> */}
                <AccountSettings token={decoded} jwt={token}/>
                <Editor token={decoded}/>

            </div>
        );
    } else {
        logout();
        return (
            <Redirect to="/login"/>
        );
    }
};

export default Dashboard;
