import React from 'react';
import {setUserData, setRepos} from '../../gitsearch/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Button = (props) => {
  const searchGit = () => {
    if(props.state.selectedOption === 'Search Repos'){
      props.setRepos(props.state.searchTerm)
      return;
    }
    props.setUserData(props.state.searchTerm)
  }
  return (
  <>
    <button data-testid="button" onClick={searchGit} className = {props.className}>{props.title}</button>
  </>
  )
}
const mapStateToProps = (state) => (
  {
    state:state.searchReducer
  }
)

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setRepos,
    setUserData
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Button);