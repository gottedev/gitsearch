import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { setUserData, setRepos } from '../../gitsearch/actions';

const Button = ({
  className, title, searchOrgnaisations, searchRepos, state: {
    selectedOption,
    searchTerm,
  },
}) => {
  const searchGit = () => {
    if (selectedOption === 'Search Repos') {
      searchRepos(searchTerm);
      return;
    }
    searchOrgnaisations(searchTerm);
  };
  return (
    <>
      <button
        data-testid="button"
        onClick={searchGit}
        className={className}
        type="submit"
      >
        {title}
      </button>
    </>
  );
};
const mapStateToProps = (state) => (
  {
    state: state.searchReducer,
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    searchRepos: setRepos,
    searchOrgnaisations: setUserData,
  },
  dispatch,
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  searchOrgnaisations: PropTypes.func.isRequired,
  searchRepos: PropTypes.func.isRequired,
  state: PropTypes.shape({
    selectedOption: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
