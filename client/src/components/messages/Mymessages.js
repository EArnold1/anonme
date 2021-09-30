import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
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
    value: `${window.location.hostname}/message/${user.userName}`,
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
          {user !== null && (
            <CopyToClipboard text={value} onCopy={onCopy}>
              <p className="p-2 l copy rounded d-md-inline">
                <i className="fas fa-share-alt"></i>{' '}
                {`https://${value}${user.userName}`}{' '}
                <i className="far fa-copy"></i>
              </p>
            </CopyToClipboard>
          )}
          {copied ? <span className="mx-3 text-success">Copied </span> : ''}
        </div>
      </section>
      <h3 className="text-center mb-3">
        My Messages{' '}
        <span className="btn small text-info p-2 d-md-inline" onClick={onClick}>
          <i className="fas fa-redo"></i>
        </span>
      </h3>
      <br />
      {messages.length > 0 ? (
        <div className="card-columns">
          {messages.map((msg) => (
            <Mymessageitem key={msg._id} messages={msg} />
          ))}
        </div>
      ) : (
        <p className="lead display-4 text-center">Oops!!!, No message</p>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  messages: state.message.messages,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getMsg })(Mymessages);
