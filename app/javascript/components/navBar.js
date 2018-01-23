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
      <nav className="navBar" role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
          <ul id="menu">
            <a href="/"><li className="menu-panel">Home</li></a>
            <a href="#"><li className="menu-panel">About Us</li></a>
            <a href="#"><li className="menu-panel">Job Listings</li></a>
            <a href="#"><li className="menu-panel">Contact</li></a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
