import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className="display-3 text-danger">
        <i className="fas fa-exclamation-triangle"></i> page not found
      </h1>
      <p className="display-4">Sorry, this page does not exist</p>
    </Fragment>
  );
};

export default NotFound;
