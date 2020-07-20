import React from 'react';
import { Items } from './Item';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/list/:id" component={Items} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
