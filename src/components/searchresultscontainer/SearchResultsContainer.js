import React from "react";
import { connect } from "react-redux";
import "./SearchResultsContainer.css";
import { compose } from "recompose";
import { Scrollbars } from "react-custom-scrollbars";
import PropTypes from "prop-types";
import WithLoader from "../WithLoader";

const SearchResultsContainer = ({ state: { data, processingStatus } }) => {
  const isDataEmpty = data.length === 0;
  const dataProcessed = processingStatus === "PROCESSED";

  if (processingStatus === "processingError") {
    return (
      <div className="ResultContainer">
        <div>Something Went Wrong!!! Try again later</div>
      </div>
    );
  }
  return (
    <Scrollbars autoHide={false} autoHeight autoHeightMin="300px">
      <div className="ResultContainer">
        {isDataEmpty && dataProcessed ? (
          <div>No Results on Github!!! Try Something else</div>
        ) : (
          data.map((val) => (
            <div className="Result" key={val.name}>
              <div className="ResultTitle">{val.name || val.login}</div>
              <div className="ResultDescription">{val.description}</div>
            </div>
          ))
        )}
      </div>
    </Scrollbars>
  );
};

const mapStateToProps = (state) => ({
  state: state.searchReducer,
});

SearchResultsContainer.propTypes = {
  state: PropTypes.shape({
    processingStatus: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  }).isRequired,
};

export default compose(
  connect(mapStateToProps, null),
  WithLoader
)(SearchResultsContainer);
