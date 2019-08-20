import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

const LoadingIndicator = ({ message }) => (
  <div className="loading-container">
    <div className="loading-indicator">
      <Spinner animation="grow" variant="primary">
        <span>{message}</span>
      </Spinner>
    </div>
  </div>
);

LoadingIndicator.propTypes = {
  message: PropTypes.string,
};

export default LoadingIndicator;
