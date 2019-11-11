import React from 'react';
import { setSelectedOption } from '../gitsearch/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GitSearch from './GitSearch';

const OrgnisationSearch = (props) => {

  props.setSelectedOption('Search Orgnisations')

  return(
    <>
      <GitSearch />
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setSelectedOption
}, dispatch)

export default connect(null, mapDispatchToProps)(OrgnisationSearch);