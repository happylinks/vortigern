import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Stars, Counter, About, Forms, Gists } from './containers';
import { Films } from './containers/Starwars/Films';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="stars" component={Stars} />
    <Route path="counter" component={Counter} />
    <Route path="about" component={About} />
    <Route path="forms" component={Forms} />
    <Route path="gists" component={Gists} />
    <Route path="starwars" component={Films} />
  </Route>
);
