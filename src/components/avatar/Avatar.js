import React from 'react';
import { connect } from 'react-redux';

const Avatar = (props) => {
  return(
    <div>
      <img src="/github-logo.svg" />
    </div>
  )
}

const mapStateToProps = (state) => ({
  selectedOption:state.searchReducer.selectedOption
})

export default connect(mapStateToProps, null)(Avatar);