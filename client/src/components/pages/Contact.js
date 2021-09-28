import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <p>
        {' '}
        You can contact us using the following social media platforms listed -{' '}
        <span>
          {' '}
          <a
            href="http://twitter.com/Arnoldcodes_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{' '}
        </span>{' '}
        ,
        <span>
          {' '}
          <a
            href="http://m.me/arnold.cam15"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{' '}
        </span>{' '}
      </p>
      <br />
      <p>
        You can email us directly{' '}
        <span>
          <a href="mailto:webarnold17@gmail.com?subject = Feedback&body = Message">
            here!
          </a>
        </span>
        , If you have any suggestions, or complaints do not hesitate to send us
        a mail. We are always available and improvements will be added to the
        new version of <span className="font-weight-bold">Anonme</span>
      </p>
      <br />
      <button className="btn btn-outline-primary m-3">
        <Link to="/about">
          <i className="fas fa-long-arrow-alt-left"></i> About
        </Link>
      </button>
    </div>
  );
};

export default Contact;
