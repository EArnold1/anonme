import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMsg } from '../../actions/message';
import Mymessageitem from './Mymessageitem';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Mymessages = ({ getMsg, messages, user }) => {
  useEffect(() => {
    getMsg();
  }, []);

  //Copy logic
  const [clip, setClip] = useState({
    copied: false,
    value: `${window.location.hostname}/message/${user}`,
  });
  const { value, copied } = clip;

  const onCopy = () => {
    setClip({ ...clip, copied: true });
    setTimeout(() => {
      setClip({ ...clip, copied: false });
    }, 2000);
  };

  const onClick = (e) => {
    e.preventDefault();
    getMsg();
  };
  return (
    <Fragment>
      <section className="container" style={{ marginTop: '55px' }}>
        <div className="my-3 p-3">
          <CopyToClipboard text={value} onCopy={onCopy}>
            <p className="bg-danger p-2 rounded d-md-inline mr-2">
              <i className="fas fa-share-alt"></i> {value}
            </p>
          </CopyToClipboard>
          {copied ? <span className="text-success">Copied </span> : ''}

          <p className="btn p-2 btn-info d-md-inline" onClick={onClick}>
            Reload messages
          </p>
        </div>
        <div className="row container">
          <p className="bg-light p-2 col m-1 rounded">
            <i className="fas fa-share-alt"></i> https://localhost:5000/messages
          </p>
          <p className="bg-light p-2 col m-1 rounded">
            <i className="fab fa-whatsapp"></i> https://localhost:5000/messages
          </p>
          <p className="bg-light p-2 col m-1 rounded">
            <i className="fab fa-facebook"></i> https://localhost:5000/messages
          </p>
        </div>
      </section>
      <h3 className="text-center mb-3">My Messages</h3>
      {messages !== null ? (
        <div className="card-columns">
          {messages.map((msg) => (
            <Mymessageitem key={msg._id} messages={msg} />
          ))}
        </div>
      ) : (
        <p className="lead display-3">No message yet</p>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  messages: state.message.messages,
  user: state.auth.user.userName,
});

export default connect(mapStateToProps, { getMsg })(Mymessages);
