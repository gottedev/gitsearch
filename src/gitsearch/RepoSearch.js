import React from 'react';
import { setSelectedOption } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GitSearch from './GitSearch';

const RepoSearch = (props) => {
  
  props.setSelectedOption('Search Repos')

  return(
    <>
      <GitSearch />
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setSelectedOption
}, dispatch)

export default connect(null, mapDispatchToProps)(RepoSearch);