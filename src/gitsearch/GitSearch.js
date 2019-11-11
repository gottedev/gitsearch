import React from 'react';
import { Button, Search, Nav, SearchResultsContainer, Avatar } from '../components';
import { connect } from 'react-redux';
import './GitSearch.css';

const GitSearch = (props) => {
  const AvatarDescription = props.selectedOption === 'Search Repos' ? 'Repos' : 'Organisations'; 

  return(
    <div className="GitSearch">
      <Nav />
      <Avatar />
      <p className="AvatarDescription">Let's search some Github {AvatarDescription}</p>
      <div className="SearchContainer">
        {/* <Select options={options} className="CustomizableSelect" /> */}
        <Search placeHolder="Enter a Username..." className="CustomizableSearch" />
        <Button title="Search" className="CustomizableButton" />
      </div>
      <div className ="ResultsContainer">
      <SearchResultsContainer />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedOption:state.searchReducer.selectedOption
})

export default connect(mapStateToProps, null)(GitSearch);
