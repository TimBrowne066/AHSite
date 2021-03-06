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
            <a href="/about"><li className="menu-panel">About</li></a>
            <a href="/jobs"><li className="menu-panel">Jobs</li></a>
            <a href="/contact_us"><li className="menu-panel">Contact</li></a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
