import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSelectedOption } from '../gitsearch/actions';

const Select = ({ selectedOptions, options, className }) => {
  const handleChange = (e) => {
    selectedOptions(e.target.value);
  };
  const renderOptions = () => (options.map((value) => <option value={value}>{value}</option>));
  return (
    <>
      <select className={className} onChange={handleChange}>
        {renderOptions()}
      </select>
    </>
  );
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  selectedOptions: setSelectedOption,
}, dispatch);

export default connect(null, mapDispatchToProps)(Select);
