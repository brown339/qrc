import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {
  return (
    <Router>      
      <>
        <Switch>
          <Route path="/:id">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
