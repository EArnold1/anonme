import React from 'react';
import moment from 'moment';

const Mymessageitem = ({ messages }) => {
  const { message, date, _id } = messages;
  return (
    <div className="card message">
      <div className="card-body">
        <span className="card-text font-weight-bold">Message:</span>
        <p className="card-text">{message}</p>

        <span>-Anonymous [{moment(date).format('lll')}]</span>
      </div>
    </div>
  );
};

export default Mymessageitem;
