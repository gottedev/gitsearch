import axios from 'axios';

const BASE_URL = 'https://api.github.com';


const getRepos = async (username) => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  const repos = await axios.get(url);
  const { data } = repos;
  if (repos.status === 404 || repos.status === 403 || repos.status === 500) {
    throw Error('processingError');
  }
  return data;
};


const getUserData = async (username) => {
  const userData = await axios
    .all([
      axios.get(`${BASE_URL}/users/${username}`),
      axios.get(`${BASE_URL}/users/${username}/orgs`),
    ]);
  if (userData.status === 404 || userData.status === 403 || userData.status === 500) {
    throw Error('processingError');
  }
  const [, { data: orgs }] = userData;
  return orgs;
};


export {
  getRepos,
  getUserData,
};
