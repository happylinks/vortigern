import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import { App } from './components';
import {
  Home,
  Stars,
  Counter,
  About,
  Gists,
  Starwars,
  Login,
} from './routes/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="stars" component={Stars} />
    <Route path="counter" component={Counter} />
    <Route path="about" component={About} />
    <Route path="gists" component={Gists} />
    <Route path="starwars" component={Starwars} />
    <Route path="login" component={Login} />
  </Route>
);
