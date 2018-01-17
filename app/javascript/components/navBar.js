import React from 'react';
import { Navbar, Image, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="NavBar">
          <input id="burger" type="checkbox" />
          <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Job Listings</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default NavBar;
