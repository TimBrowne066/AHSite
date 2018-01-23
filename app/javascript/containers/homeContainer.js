import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="HomeContainer">
        <section id="home-1">

              <Image className="homeLogo" src={Logo}/>
              <div className="welcome">
                <h1>The IT recruiting model is broken.</h1>
                <h2>So we fixed it.</h2>
              </div>
          <div className="arrow">
            <a href="home-2"><i className="fa fa-chevron-down"></i></a>
          </div>
        </section>
        <section id="home-2"></section>
        <section id="home-3"></section>
        <section id="home-4"></section>
      </div>
    );
  }
}

export default HomeContainer;
