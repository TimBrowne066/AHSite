import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Me from '../../assets/images/me_panel.png';
var ReactFitText = require('react-fittext');

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
            <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>As an organization, there are literally hundreds of staffing agencies you could reach out to when it comes to filling your IT needs.</p></ReactFitText>
            <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>As a candidate, you have the same number of options – or you could just upload your resume to any number of job boards and let them come to you, right?</p></ReactFitText>
            <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>The founder of AgileHires has the unique perspective of not only being part of a top staffing agency, but being an IT professional who dealt with recruiters dozens of times.</p></ReactFitText>
            <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>In the interest of your time, here are some of the top ways AgileHires differs from our competition.</p></ReactFitText>
            <Grid>
              <Row className="text-center">
                <Col sm={12} lg={4}>
                  <Image responsive thumbnail className="me-image" src={Me}/><br/>
                  <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><b>Arie Mangrum </b></ReactFitText>
                  <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><i>Founder of AgileHires</i></ReactFitText>
                </Col>
                <Col sm={12} lg={8}>
                  <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>AgileHires believes in supplementing the IT industry and making it better.</p></ReactFitText>
                  <ReactFitText minFontSize={14} maxFontSize={16} compressor={0.5}><p>Some more stuff here!</p></ReactFitText>
                </Col>
              </Row>
            </Grid>
          </div>
        </div></Fade>
      </div>
    );
  }
}

export default AboutContainer;
