import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';

const Login = ({ setAlert, login, auth: { isAuthenticated } }) => {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  });

  const { userName, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (userName === '' || password === '') {
      setAlert('Fill in every filed');
    } else {
      login({ userName, password });
      setUser({ ...user, userName: '', password: '' });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/me/messages" />;
  }

  return (
    <Fragment>
      {' '}
      <div className="form-group">
        <h1>
          Acccount <span className="text-primary">Login</span>{' '}
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={userName}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={onChange}
              required
              minLength={4}
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setAlert, login })(Login);
