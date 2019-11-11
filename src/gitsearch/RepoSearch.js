import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { setSelectedOption } from './actions';
import GitSearch from './GitSearch';

const RepoSearch = ({ selectOption }) => {
  selectOption('Search Repos');

  return (
    <>
      <GitSearch />
    </>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectOption: setSelectedOption,
}, dispatch);

RepoSearch.propTypes = {
  selectOption: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(RepoSearch);
