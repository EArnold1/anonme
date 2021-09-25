import React, { useState } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { msgWrite } from '../../actions/message';

const Message = ({ msg, msgWrite, isAuthenticated }) => {
  const { username } = useParams();
  const [messageVal, setMessage] = useState({
    message: '',
  });
  const { message } = messageVal;

  const onChange = (e) => {
    setMessage({ ...messageVal, message: e.target.value });
  };
  const send = (e) => {
    e.preventDefault();
    msgWrite({ message, username });
    setMessage({ message: '' });

    // if (isAuthenticated) {
    //   return <Redirect to="/me/messages" />;
    // } else {
    //   return <Redirect to="/register" />;
    // }
  };

  return (
    <div className="container pt-5">
      <div className="text-center">
        <h2>Write Something</h2>
      </div>
      {msg && (
        <p className="text-success text-center">
          {msg} <Link to="/register">Register </Link>{' '}
        </p>
      )}
      <br />
      <div className="container w-75 px-auto">
        <p className="lead">Say Something About Me</p>
        <p>
          <i className="fas fa-exclamation-circle"></i> Stay Anonymous
        </p>
        <form onSubmit={send}>
          <div className="form-group">
            <textarea
              className="form-control border-0 display-2 shadow p-3 mb-5"
              rows="5"
              id="comment"
              placeholder={`Leave a message for ${username} here`}
              style={{ fontSize: 'large' }}
              onChange={onChange}
              value={message}
              minLength={5}
              required
            />
            <br />
            <button className="btn btn-primary btn-block" type="submit">
              Send Message <i className="far fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  msg: state.message.msg,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { msgWrite })(Message);
