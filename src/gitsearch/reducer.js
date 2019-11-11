
const initialState = {
  processingStatus: 'NOT_PROCESSED',
  searchTerm: '',
  selectedOption: 'Search Repos',
  data: [],
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case 'setSearchTerm':
      return {
        ...state,
        searchTerm: payload,
      };

    case 'processing':
      return {
        ...state,
        processingStatus: 'PROCESSING',
      };

    case 'processingError':
      return {
        ...state,
        processingStatus: 'processingError',
      };

    case 'SetRepos':
      return {
        ...state,
        data: payload,
        processingStatus: 'PROCESSED',
      };

    case 'SearchOrganisations':
      return {
        ...state,
        data: payload,
        processingStatus: 'PROCESSED',
      };
    case 'SetSelectedOption':
      return {
        ...state,
        selectedOption: payload,
        processingStatus: 'NOT_PROCESSED',
        data: [],
      };
    default:
      return state;
  }
};
