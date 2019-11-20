import React from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Login from "./views/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhitePaper from './views/WhitePaperPage/WhitePaper';
import About from './views/About/About';
import ProductPage from './views/ProductPage/ProductPage';

const App = () => {
    return (
    <div style={{display: "flex", flexDirection: "row", width:"90%"}}  className='m-auto' id='top'>
            <a href={'/home'}>
                <img src='/favicon.ico' className='static-logo position-static ml-0'
                     alt='This is replacement text if an image does not display.'/>
            </a>
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/">
                    <Redirect to="/Home"/>
                </Route>
                <Route exact path="/login" component={Login} pattern="/login"/>
                <Route path="/whitepages" component={WhitePaper}/>
                <Route path="/productpage" component={ProductPage}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
    </div>
    );
};

export default App;
