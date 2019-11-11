import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSearchTerm, setUserData, setRepos } from '../gitsearch/actions';


const Search = ({ placeholder, className, setSearching }) => {
  const handleChange = (e) => {
    setSearching(e.target.value);
  };
  return (
    <>
      <input
        placeholder={placeholder}
        type="text"
        className={className}
        onChange={handleChange}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  searchTerm: state.searchReducer.searchTerm,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSearching: (payload) => setSearchTerm(payload),
  setData: (payload) => setUserData(payload),
  setRepos: (payload) => setRepos(payload),
}, dispatch);

Search.propTypes = {
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  setSearching: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
