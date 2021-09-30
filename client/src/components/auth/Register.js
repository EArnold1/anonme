import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [userForm, setUserForm] = useState({
    userName: '',
    password: '',
    password2: '',
  });

  const [clicked, setClicked] = useState(false);

  const { userName, password, password2 } = userForm;

  const onChange = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ userName, password });
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 5000);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/me/messages" />;
  }

  return (
    <Fragment>
      <div className="form-group">
        <h1>
          Acccount <span className="text-primary">Register</span>{' '}
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={onChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              className="form-control"
              required
              minLength={4}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              className="form-control"
              required
              minLength={4}
            />
          </div>
          <button
            type="submit"
            value="Login"
            className="btn btn-primary btn-block"
          >
            <span
              className={`${clicked && 'spinner-grow spinner-grow-sm'}`}
            ></span>{' '}
            Submit
          </button>
        </form>
      </div>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
