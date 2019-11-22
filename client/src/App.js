import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Login from "./views/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhitePaper from './views/WhitePaperPage/WhitePaper';
import About from './views/About/About';
import ProductPage from './views/ProductPage/ProductPage';
import DashBoard from './views/AdminDashboard/DashBoard'
const App = () => {

    const homeLogo = <a href={'/home'}>
        <img src='/favicon.ico' className='static-logo position-static ml-0'
             alt='This is replacement text if an image does not display.'/>
    </a>;

    return (
    <div style={{display: "flex", flexDirection: "row", width:"90%"}}  className='m-auto' id='top'>
        {window.location.pathname !== '/home' ? homeLogo : null}
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/">
                    <Redirect to="/home"/>
                </Route>
                <Route path="/login" component={Login}/>
                <Route path="/whitepages" component={WhitePaper}/>
                <Route path="/product" component={ProductPage}/>
                <Route path="/about" component={About}/>
                <Route path="/dashboard" component={DashBoard}/>
                <Route component={NotFound}/>
            </Switch>
    </div>
    );
};

export default App;
