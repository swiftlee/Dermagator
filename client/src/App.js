import React from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import AdminPanel from "./views/AdminPanel/AdminPanel"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhitePaper from './views/WhitePaperPage/WhitePaper';
import About from './views/About/About';

const App = () => {
    return (
        <div style={{width: "90%"}} className='m-auto' id='top'>
            <Link to={'/home'}>
                <img src='/favicon.ico' className='static-logo position-static ml-0'
                     alt='This is replacement text if an image does not display.'/>
            </Link>
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/">
                    <Redirect to="/Home"/>
                </Route>
                <Route exact path="/login" component={AdminPanel} pattern="/login"/>
                <Route path="/whitepages" component={WhitePaper}/>
                <Route path="/about" component={About}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
};

export default App;