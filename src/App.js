import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './pages/home/index';
import Blog from './pages/blog';
import Projects from './pages/projects';
import Layout from './layouts/PageLayout';

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
    <Layout>
      <RouterComponent />
    </Layout>
  );
}
