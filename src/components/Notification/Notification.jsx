import React from 'react';

import PropTypes from 'prop-types';

const Notification = ({ message = '' }) => {
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
