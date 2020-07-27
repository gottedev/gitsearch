import React from 'react';
import { RingLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const WithLoader = (Component) => ({ state }) => {
  const { processingStatus } = state;
  if (processingStatus === 'PROCESSING') {
    return (
      <div className="ResultContainer">
        <RingLoader height="250" width="250" color="rgb(99, 159, 170)" />
      </div>
    );
  }
  return (
    <Component state={state} />
  );
};

WithLoader.propTypes = {
  state: PropTypes.shape({
    processingStatus: PropTypes.string.isRequired,
  }).isRequired,
};

export default WithLoader;
