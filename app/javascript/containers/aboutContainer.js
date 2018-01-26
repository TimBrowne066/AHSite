import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Me from '../../assets/images/me_panel.png';

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="section" id="home-4">
        <Fade duration={1500}><div className="AboutContainer">
          <div className="about-text">
            <h1>Why choose AgileHires?</h1>
            <p>As an organization, there are literally hundreds of staffing agencies you could reach out to when it comes to filling your IT needs.</p>
            <p>As a candidate, you have the same number of options – or you could just upload your resume to any number of job boards and let them come to you, right?</p>
            <p>The founder of AgileHires has the unique perspective of not only being part of a top staffing agency, but being an IT professional who dealt with recruiters dozens of times.</p>
            <p>In the interest of your time, here are some of the top ways AgileHires differs from our competition.</p>
            <Row className="text-center">
              <Col sm={12} lg={4}>
                <Image responsive thumbnail className="me-image" src={Me}/>
                <b>Arie Mangrum </b>
                <i>Founder of AgileHires</i>
              </Col>
              <Col sm={12} lg={8}>
                <p>AgileHires believes in supplementing the IT industry and making it better.</p>
                <p>Some more stuff here...</p>
              </Col>
            </Row>
          </div>
        </div></Fade>
      </div>
    );
  }
}

export default AboutContainer;
