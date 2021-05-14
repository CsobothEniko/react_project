import { Login } from './Login';
import { GlobalProvider } from '../context/GlobalState';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const FirstPage = () => {
    return (
        <div style={{ maxWidth: "17rem", margin: "4rem auto" }}>
            <h1> Welcome guy! </h1>
              <GlobalProvider>
                  <Router>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                    </Switch>
                  </Router>
              </GlobalProvider>
              <div className ="text-center">
              <Link to="/login" className="btn btn-danger"> Login</Link>
              </div>
        </div>
    )
}