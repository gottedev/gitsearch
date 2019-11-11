import React from 'react';
import { setSelectedOption } from '../gitsearch/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Select = (props) => {
  const handleChange = (e) => {
    props.setSelectedOption(e.target.value);
  }
  const renderOptions = () => (props.options.map(value => 
      <option value={value}>{value}</option>
      ))
  return(
    <>
      <select className={props.className} onChange={handleChange}>
        {renderOptions()}
      </select>
    </>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setSelectedOption
}, dispatch)

export default connect(null, mapDispatchToProps)(Select);