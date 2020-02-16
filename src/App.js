import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/index';
import Blog from './pages/blog/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} render={props => <Home {...props}/>}/>
        <Route exact path={process.env.PUBLIC_URL + '/blog'} render={props => <Blog {...props}/>} />
      </Switch>
    </Router>

  );
}

export default App;
