import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as ReactBootStrap from 'react-bootstrap';

import * as actions from '../actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signOut();
  }

  render() {
    return (
      <div className="App">
        <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
          <Link to="/">
            <ReactBootStrap.Navbar.Brand href="#home"><img src="favicon.ico" alt="logo"/></ReactBootStrap.Navbar.Brand>
          </Link>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto"> 
              { this.props.isAuth ?
              <Link to="/dashboard">
                <ReactBootStrap.Nav.Link href="#features">Dashboard</ReactBootStrap.Nav.Link>
              </Link> : null }
                </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
              { !this.props.isAuth ?
              <Link to="/signup">
                <ReactBootStrap.Nav.Link href="#signup">Sign Up</ReactBootStrap.Nav.Link>
              </Link> :null }
              { !this.props.isAuth ?  
                <Link to="/signin">
              <ReactBootStrap.Nav.Link href="#signin">Login</ReactBootStrap.Nav.Link>
                </Link> : null }
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
              { this.props.isAuth ?
                <Link to="/signout" onClick={this.signOut}>
              <ReactBootStrap.Nav.Link href="#signout">Logout</ReactBootStrap.Nav.Link>
              </Link> : null }
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps, actions)(Header);