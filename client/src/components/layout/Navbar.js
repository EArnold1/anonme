import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { loading, isAuthenticated }, logout }) => {
  const guestLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link text-light" to="/login">
          LOGIN
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/register">
          REGISTER
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="#">
          ABOUT
        </Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link text-light" to="/me/messages">
          MESSAGES
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light" to="/about">
          ABOUT
        </Link>
      </li>
      <li className="nav-item" onClick={logout}>
        <Link className="nav-link text-light" to="/">
          <i className="fas fa-sign-out-alt" /> LOGOUT
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark py-1 fixed-top">
      <Link className="navbar-brand" to="/">
        <h2>
          {' '}
          <i className="fas fa-envelope-open-text "></i>
        </h2>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
