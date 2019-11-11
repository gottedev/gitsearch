import React from 'react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import OrganisationSearch from './gitsearch/OrgnisationSearch';
import RepoSearch from './gitsearch/RepoSearch';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/SearchOrganisations" component={OrganisationSearch} />
      <Route path="/" exact component={RepoSearch} />
    </Switch>
  </Router>
);


export default AppRouter;
