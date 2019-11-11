import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setSearchTerm, setUserData, setRepos} from '../gitsearch/actions';


const Search = (props) => {
  const handleChange =(e)=>{
    props.setSearching(e.target.value);
  } 
  return (
    <>
      <input placeHolder={props.placeHolder} type="text" 
       className={props.className} onChange={handleChange}
      />
    </>
  )
}

const mapStateToProps = (state) => ({
searchTerm:state.searchReducer.searchTerm
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setSearching: (payload) => setSearchTerm(payload),
  setData: (payload) => setUserData(payload),
  setRepos: (payload) => setRepos(payload)
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search);