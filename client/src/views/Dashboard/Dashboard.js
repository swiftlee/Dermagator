import React from 'react';
import './Dashboard.css';
import "react-pdf/dist/Page/AnnotationLayer.css";
import Editor from '../../components/Admin/Editor/Editor';
import AccountSettings from '../../components/Admin/AccountSettings/AccountSettings';
import useLogin from "../Login/useLogin"
import {Route, Switch, Redirect} from 'react-router-dom';
import Button from "react-bootstrap/Button"
const jwt=require('jsonwebtoken');
const Dashboard= () => {
    const {logout,returnAuth} = useLogin();
    if(returnAuth()){
        console.log(returnAuth());
        return(
            <Redirect to="/login"/>
        )
    }
    const token=localStorage.getItem("jwtToken");
    console.log(token);
    var decoded;
    if(token){
        decoded=jwt.decode(token.substring(7, token.length).trim());
    }
    else{
        return(
            <Redirect to="/login"/>
        )
    }
    const time=Date.now()/1000;
    if(decoded.exp>time){
        return(
            <div className="wide-container">
                <Button onClick={logout}>Log out</Button>
            {/* <NavBar items={navItems["admin-bar"]}/> */}

            <AccountSettings token={decoded}/>
            <Editor token={decoded}/>

        </div>
        );
    }
    else{
        logout();
        return(
            <Redirect to="/login" />
        );
    }
};

export default Dashboard;
