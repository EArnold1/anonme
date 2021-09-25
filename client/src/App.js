import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Landing from './components/pages/Landing';
import PrivateRoute from './routing/PrivateRoute';

import setAuthToken from './utils/setAuthToken';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import Message from './components/messages/Message';
import Mymessages from './components/messages/Mymessages';

if (localStorage.anonme) {
  setAuthToken(localStorage.anonme);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container" style={{ marginTop: '70px' }}>
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/message/:username" component={Message} />
              <PrivateRoute exact path="/me/messages" component={Mymessages} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
