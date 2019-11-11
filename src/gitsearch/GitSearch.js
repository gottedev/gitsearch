import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button, Search, Nav, SearchResultsContainer, Avatar,
} from '../components';
import './GitSearch.css';

const GitSearch = ({ selectedOption }) => {
  const AvatarDescription = selectedOption === 'Search Repos' ? 'Repos' : 'Organisations';

  return (
    <div className="GitSearch">
      <Nav />
      <Avatar />
      <p className="AvatarDescription">
        {`Let's search some Github ${AvatarDescription}`}
      </p>
      <div className="SearchContainer">
        <Search placeholder="Enter a Username..." className="CustomizableSearch" />
        <Button title="Search" className="CustomizableButton" />
      </div>
      <div className="ResultsContainer">
        <SearchResultsContainer />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedOption: state.searchReducer.selectedOption,
});

GitSearch.propTypes = {
  selectedOption: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(GitSearch);
