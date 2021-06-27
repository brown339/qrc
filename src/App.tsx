import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <header className="container">
        Brand Name
      </header>
      
      <main className="container">
        <Switch>
          <Route path="/:id">
            <Home />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
