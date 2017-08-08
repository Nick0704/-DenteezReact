import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './components/index/IndexPage';
import SupportPage from './components/support/SupportPage';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={IndexPage}/>
        <Route path='/support' component={SupportPage}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);