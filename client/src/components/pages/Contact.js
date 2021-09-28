import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <p>
        {' '}
        You can contact us using the following social media platforms listed-{' '}
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
        </span>{' '}
        If you are a Law Enforcement Agency Representative, you are requested to
        contact via special channels. Click Here for More information.
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
