import { getRepos, getUserData } from './api';

const init = (dispatch) => {
  dispatch({ type: 'processing' });
};


const setSearchTerm = (searchTerm) => (dispatch) => {
  dispatch({ type: 'setSearchTerm', payload: searchTerm });
};

const setSelectedOption = (selectedOption) => (dispatch) => {
  dispatch({ type: 'SetSelectedOption', payload: selectedOption });
};

const setUserData = (searchTerm) => (dispatch) => {
  init(dispatch);
  const onSuccess = (data) => {
    dispatch({ type: 'SearchOrganisations', payload: data });
  };

  const onError = () => {
    dispatch({ type: 'processingError' });
  };

  getUserData(searchTerm)
    .then(onSuccess)
    .catch(onError);
};

const setRepos = (searchTerm) => (dispatch) => {
  init(dispatch);
  const onSuccess = (data) => {
    dispatch({ type: 'SetRepos', payload: data });
  };

  const onError = () => {
    dispatch({ type: 'processingError' });
  };

  getRepos(searchTerm)
    .then(onSuccess)
    .catch(onError);
};

export {
  setSearchTerm, setUserData, setRepos, setSelectedOption,
};
