import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import PrivateRoute from '../routing/PrivateRoute';

import Alert from '../components/layout/Alert';
import Message from '../components/messages/Message';
import Mymessages from '../components/messages/Mymessages';
import Profile from '../components/pages/Profile';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import NotFound from '../components/pages/NotFound';

const Routes = () => {
  return (
    <section className="container" style={{ marginTop: '70px' }}>
      <Alert />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/message/:username" component={Message} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/me/messages" component={Mymessages} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
