import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import Logo from '../../assets/images/logo1.png';
import Me from '../../assets/images/me_panel.png';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="HomeContainer">
        <div className="section" id="home-1">
          <Row>
            <Col sm={8} smOffset={2}>
              <Image className="homeLogo" src={Logo}/>
            </Col>
          </Row>
              <div className="welcome">
                <h1 className="typewriter">The IT recruiting model is broken.</h1>
                <Zoom delay={500}><h2>So we fixed it.</h2></Zoom>
              </div>
          <div className="arrow">
            <a href="#home-2"><i className="fa fa-chevron-down"></i></a>
          </div>
        </div>
        <div className="section" id="home-2">
          <Fade><div className="home-2-container">
              <Row>
                <Col sm={12}>
                  <h1>Container 2 Title</h1>
                </Col>
              </Row>
              <Row>

                <Col className="text-center" sm={6}>
                  <Image className="container-2-image" src={Me}/>
                </Col>
                <Col className="text-left" sm={6}>
                  <div className="container-2-content">

                    <h1 className="text-left">Hello</h1>
                    <Zoom delay={300}><ul>
                      <li>Stuff</li>
                      <li>Stuff</li>
                      <li>Stuff</li>
                      <li>Stuff</li>
                      <li>Stuff</li>
                    </ul></Zoom>
                  </div>
                </Col>
              </Row>
          </div></Fade>
        </div>
        <div className="section" id="home-3"></div>
        <div className="section" id="home-4"></div>
      </div>
    );
  }
}

export default HomeContainer;
