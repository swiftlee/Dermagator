import React,{useState} from 'react';
import useLogin from "../Login/useLogin"
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import data from "../../data/AboutPage"
import useAboutPage from './useAboutPage';
import AboutUpdate from '../../components/About/UpdateForm'
const jwt=require('jsonwebtoken');

const DashBoard=()=>{
    const {logout,returnAuth} = useLogin();
    //trying to get the token
    if(returnAuth()){
        console.log(returnAuth())
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
            <div>
                <p>Hello {decoded.name} is welcome here</p>
                <button onClick={logout}>Log out</button>
                <AboutUpdate/>
            </div>
        );
    }
    else{
        logout();
        return(
            <Redirect to="/login" />
        );
    }
}


// export default DashBoard;