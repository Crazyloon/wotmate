import React from 'react';
import {Link, NavLink, BrowserRouter as Router} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">¿WotMate?</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><NavLink to="/workout" className="nav-link" activeClassName="active">➕ </NavLink></li>
          <li className="nav-item"><NavLink to="/workouts" className="nav-link" activeClassName="active">My Workouts</NavLink></li>
          <li className="nav-item"><NavLink to="/routines" className="nav-link" activeClassName="active">Routines</NavLink></li>
          <li className="nav-item"><NavLink to="/exercises" className="nav-link" activeClassName="active">Exercises</NavLink></li>
          <li className="nav-item"><NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
        </form>
      </div>
    </nav>
  );
};
 
export default Header;