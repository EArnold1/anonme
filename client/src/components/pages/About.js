import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container-fluid px-0">
      <p>
        This is version 1.0.0 of{' '}
        <span className="font-weight-bold">Anonme</span>
      </p>
      <p>
        Anonme is an interactive anonymous messaging app with a dare game.
        Create your Profile Link and Send it to all your contacts to check what
        do your friends think about you. With the help of Anonme, you can send
        and recieve anonymous compliments easily for free!
      </p>
      <p>
        Their will be an update!! very soon, things like{' '}
        <span className="font-weight-bold">Email</span> will be added for easy
        password reset and recovery
      </p>
      <br />
      <div className="container-fluid px-0">
        <div className="card-deck">
          <div className="card shadow p-1">
            <div className="card-body text-left">
              <p className="text-left display-4">
                <i className="fas fa-signature"></i>
              </p>
              <h4 className="card-title">Safe &#38; Secure</h4>
              <p className="card-text d-md-none d-lg-block">
                Safety of our users using this anonymous messaging platform is
                very important for us. We have got reporting systems so that you
                can report anything that you do not like to see.
              </p>
            </div>
          </div>
          <div className="card shadow p-1">
            <div className="card-body text-left">
              <p className="display-4">
                <i className="fas fa-signature"></i>
              </p>
              <h4 className="card-title">Friendly UI</h4>
              <p className="card-text d-md-none d-lg-block">
                We are constantly working on Anonme as a platform to make it as
                user friendly as possible. As of now you can just sign-up on our
                website, fill in your username &#38; password to get started.
              </p>
            </div>
          </div>
          <div className="card shadow p-1">
            <div className="card-body text-left">
              <p className="display-4">
                <i className="fas fa-signature"></i>
              </p>
              <h4 className="card-title">24/7 Support</h4>
              <p className="card-text d-md-none d-lg-block">
                If there is anything that you need help with related to our
                anonymous messaging and feedback platform, We are always here
                for you. 24 hours a day and 7 days a week.
              </p>
            </div>
          </div>
          <div className="card shadow p-1">
            <div className="card-body text-left">
              <p className="display-4">
                <i className="fas fa-signature"></i>
              </p>
              <h4 className="card-title">Obscurity</h4>
              <p className="card-text d-md-none d-lg-block">
                Our Platform ensures your privacy so that you stay anonymous
                everytime you send someone a secret message. You are anonymous
                until you ever choose to reveal your identity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-outline-primary m-3">
        <Link to="/contact">
          CONTACT <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
      </button>
    </div>
  );
};

export default About;
