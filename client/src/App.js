import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import AdminPanel from "./views/AdminPanel/AdminPanel"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhitePaper from './views/WhitePaperPage/WhitePaper';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/login" component={AdminPanel} pattern="/login"/>
        <Route path="/whitepages" component={WhitePaper}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
