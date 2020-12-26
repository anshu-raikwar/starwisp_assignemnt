import React from 'react';
import { HashRouter,/*BrowserRouter,*/ Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/HomePage';

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path="/DashBoard">
          <HomePage menuItem={0} />
        </Route>
        <Route exact path="/">
            <Redirect to="/DashBoard" />
        </Route>
        <Route exact path="/ClassStream" >
          <HomePage menuItem={1} />
        </Route>
        <Route exact path="/Ipsum" >
          <HomePage menuItem={2} />
        </Route>
      </Switch> 
    </HashRouter>
  );
}

export default App;