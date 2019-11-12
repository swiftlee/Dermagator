import React from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import AdminPanel from "./views/AdminPanel/AdminPanel"
import 'bootstrap/dist/css/bootstrap.min.css';
import WhitePaper from './views/WhitePaperPage/WhitePaper';

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
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
};

export default App;

/*
import React, { Component } from "react";
import { Document, Page } from "react-pdf";

export default class App extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </nav>

        <div style={{ width: 600 }}>
          <Document
            file="/cream_article.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}
*/