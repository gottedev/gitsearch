import React from 'react';
import {connect} from 'react-redux';
import './SearchResultsContainer.css';
import { compose } from 'recompose';
import WithLoader from '../WithLoader';
import { Scrollbars } from 'react-custom-scrollbars';

const SearchResultsContainer = (props) => {
  const processingStatus = props.state.processingStatus;
  const isDataEmpty = props.state.data.length === 0;
  const dataProcessed = processingStatus === 'PROCESSED';

  if(processingStatus==='processingError') {
    return(
      <div className="ResultContainer">
      {
        <div>Something Went Wrong!!! Try again later</div>
      }
      </div>
    )
  }
  return (
    <Scrollbars autoHide={false} autoHeight autoHeightMin="300px" >
    <div className="ResultContainer">
      { isDataEmpty && dataProcessed ?
        
        (
          <div>
            No Results on Github!!! Try Something else
          </div>
        )
      :(props.state.data.map(val => 
        <div className="Result">
          <div className="ResultTitle">{val.name || val.login}</div>
          <div className="ResultDescription">{val.description}</div>
        </div>
      ))
      }
  </div> 
</Scrollbars>);
}

const mapStateToProps = (state) => (
  {
    state:state.searchReducer
  }
)

export default compose(connect(mapStateToProps, null),WithLoader)(SearchResultsContainer);