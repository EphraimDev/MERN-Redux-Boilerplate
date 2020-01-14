import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Navbar, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NavBar = ({ isAuthenticated, user: { firstName, lastName} }) => {
  const authLinks = (
    <Nav className='ml-auto'>
      <Link to='/profile'>{firstName} {lastName}</Link>
      <Link to='/signout'>Sign Out</Link>
    </Nav>
  );

  const guestLinks = (
    <Nav className='ml-auto'>
      <Link to='/register'>Register</Link>
    </Nav>
  );
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>MERN-REDUX</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          {isAuthenticated ? authLinks : guestLinks}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps, {})(NavBar);
