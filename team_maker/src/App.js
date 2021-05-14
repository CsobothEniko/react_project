import React from 'react';
import { BrowserRouter as Router, Switch, Route , Link} from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { AddCharacter } from './components/AddCharacter';
import { Edit } from './components/Edit';
import { FirstPage } from './components/FirstPage';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    return (
        <div style={{ maxWidth: "60rem", margin: "4rem auto" }}>
              <GlobalProvider>
                  <Router>
                    <Switch>
                        <Route exact path="/" component={FirstPage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/add" component={AddCharacter} />
                        <Route path="/edit/:id" component={Edit} />
                    </Switch>
                  </Router>
              </GlobalProvider>
        </div>
    );
}

export default App;
