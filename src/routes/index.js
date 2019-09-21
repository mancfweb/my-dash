import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/profile/:username" component={Profile} />

      <Route path="/" component={NotFound} />
    </Switch>
  );
}
