import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './pages/home/index';
import Blog from './pages/blog/index'
import Navigation from './components/Navigation';
import Projects from './pages/projects';

const RouterComponent = () => {
  return (

    // Hash router works similarly to BrowserRouter
    // except that it uses the portion of the url after 
    // the '#' to preserve history (as in next and previous)
    // and sync the UI and the URL.
    <HashRouter basename='/'>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/projects" component={Projects} />
    </HashRouter>
  )
}

export default function App() {
  return (
    <>
      <Navigation />
      <RouterComponent />
    </>
  );
}
