import React from 'react';
import { RingLoader } from 'react-spinners';

const WithLoader = Component => props => {
  const processingStatus = props.state.processingStatus;
  if(processingStatus==='PROCESSING') {
    return(
      <div className="ResultContainer">
      {
        <RingLoader height='250' width='250' color='rgb(99, 159, 170)'/>
      }
      </div>
    )
  }
  return(
    <Component {...props}/>
  )
}


export default WithLoader;