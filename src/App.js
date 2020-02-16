import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home/index';
import Blog from './pages/blog/index'

function App() {
  return (
    <div>
      <div><h1>Heeeyyy-yo!</h1></div>
      <RouterComponent />
    </div>
  );
}

const RouterComponent = () => {
  return (
      <HashRouter basename='/'>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
        </div>
      </HashRouter>
  )
}

export default App;
