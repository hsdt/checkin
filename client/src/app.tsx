import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/animate.min.css';
import './assets/css/light-bootstrap-dashboard.css';
import './assets/css/app.css';
import './assets/css/pe-icon-7-stroke.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import AdminLayout from './layouts/Admin';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/admin' render={props => <AdminLayout {...props} />} />
      <Redirect from='/' to='/admin/dashboard' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app-container'),
);
