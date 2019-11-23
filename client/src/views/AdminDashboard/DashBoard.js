import React,{useState} from 'react';
import useLogin from "../Login/useLogin"
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
const jwt=require('jsonwebtoken');

const DashBoard=()=>{
    const {user, isAuthenticated,setAuthenticated,setUser,logout,setAuthToken} = useLogin();
    
    //trying to get the token
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
                <p>Hello is not welcome here</p>
                <button onClick={logout}>Log out</button>
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


export default DashBoard;