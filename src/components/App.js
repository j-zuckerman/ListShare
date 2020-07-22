import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import { List } from './List';
import { ListPage } from '../pages/List';
import ListProvider from '../context';

function App() {
  return (
    <div className="App">
      <ListProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/list/:id" component={ListPage} />
          </Switch>
        </Router>
      </ListProvider>
    </div>
  );
}

export default App;
