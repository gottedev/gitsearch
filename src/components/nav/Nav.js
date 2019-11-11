import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
  <div className="Navbar">
    <Link to ="/">RepoSearch</Link>
    <Link to ="/SearchOrganisations">SearchOrganisations</Link>
  </div>)
}

export default Nav;