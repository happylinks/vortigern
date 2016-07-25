import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Home, Stars, Counter } from './containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="stars" component={Stars} />
    <Route path="counter" component={Counter} />
  </Route>
);
