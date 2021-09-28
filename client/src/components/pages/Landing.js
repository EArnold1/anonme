import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import landingImg from '../../photos/landingImg.jpg';
import '../../App.css';
//Animate
import { useSpring, animated } from 'react-spring';
const Landing = () => {
  //Animations
  const styles = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
  });
  const txtStyle = useSpring({
    from: { marginLeft: -100 },
    to: { marginLeft: 0 },
    config: { duration: 400 },
  });

  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid mt-5">
        <div className="container row mx-auto">
          <div className="container col-md-6">
            <animated.h1 style={txtStyle} className="mb-4">
              Send Secret Anonymous Messages Online
            </animated.h1>
            <animated.p style={txtStyle}>
              Anonme is an interactive anonymous messaging app with a dare game.
              Create your Profile Link and Send it to all your contacts to check
              what do your friends think about you. With the help of Anonme, you
              can send and recieve anonymous compliments easily for free!
            </animated.p>
            <br />
            <section className="mb-3">
              <Link to="/login">
                <animated.button
                  style={styles}
                  className="btn btn-outline-light mr-3"
                >
                  Login
                </animated.button>
              </Link>
              <Link to="/register">
                <button className="btn btn-light">sign-up</button>
              </Link>
            </section>
          </div>
          <div className="container shadow-lg p-3 mb-5 rounded landingImg col-md-6 d-none d-sm-block">
            <img src={landingImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <section className="container">
        <div className="mb-4 text-center">
          <h3 className="">Why you should use Anonme</h3>
          <div className="container px-5">
            <p className="mx-5">
              Our Anonymous Messaging App comes along with many great features.
              Here we are going to list some of them. Have a look below.
            </p>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="card-deck">
            <div className="card shadow p-3">
              <div className="card-body text-left">
                <p className="text-left display-4">
                  <i className="fas fa-signature"></i>
                </p>
                <h4 className="card-title">Safe &#38; Secure</h4>
                <p className="card-text text-left">
                  Safety of our users using this anonymous messaging platform is
                  very important for us. We have got reporting systems so that
                  you can report anything that you do not like to see.
                </p>
              </div>
            </div>
            <div className="card shadow p-3">
              <div className="card-body text-left">
                <p className="display-4">
                  <i className="fas fa-signature"></i>
                </p>
                <h4 className="card-title">Friendly UI</h4>
                <p className="card-text">
                  We are constantly working on Anonme as a platform to make it
                  as user friendly as possible. As of now you can just sign-up
                  on our website, fill in your username &#38; password to get
                  started.
                </p>
              </div>
            </div>
            <div className="card shadow p-3">
              <div className="card-body text-left">
                <p className="display-4">
                  <i className="fas fa-signature"></i>
                </p>
                <h4 className="card-title">24/7 Support</h4>
                <p className="card-text">
                  If there is anything that you need help with related to our
                  anonymous messaging and feedback platform, We are always here
                  for you. 24 hours a day and 7 days a week.{' '}
                  <Link to="/contact">CONTACT</Link>
                </p>
              </div>
            </div>
            <div className="card shadow p-3">
              <div className="card-body text-left">
                <p className="display-4">
                  <i className="fas fa-signature"></i>
                </p>
                <h4 className="card-title">Anonymity</h4>
                <p className="card-text">
                  Our Platform ensures your privacy so that you stay anonymous
                  everytime you send someone a secret message. You are anonymous
                  until you ever choose to reveal your identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Landing;
