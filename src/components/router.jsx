import React, { Component } from 'react';
import { Router, Route, IndexRoute  } from 'react-router';
import App from './app';
import NotFound from './404';
import Discover from './discover';
import SearchResult from './searchResult';

class Routes extends Component{
  render(){
    return(
      <Router history={this.props.history} >
        <Route path="/" component={App}>
          <IndexRoute component={Discover} />
          <Route path="/search/song" component={() => (<SearchResult type="song" />)} />
          <Route path="/search/album" component={() => (<SearchResult type="album" />)} />
          <Route path="/search/playlist" component={() => (<SearchResult type="playlist" />)} />
        </Route>
        <Route path="*" component={NotFound} />
      </Router>
    )
  }
}

export default Routes