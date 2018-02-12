import React from 'react';
import { Carousel, ButtonToolbar, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Me from '../../assets/images/me_panel.png';
var ReactFitText = require('react-fittext');
import BeGroup from '../../assets/images/postcard_1_valentines_sample_small.png';
import ZipCode from '../../assets/images/postcard_1_linkedin_picture.png'

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="section" id="about-id">
        <Fade duration={1500}><div className="AboutContainer">
          <div className="about-text">
            <h1>Why choose AgileHires?</h1>
            <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>As an organization, there are literally hundreds of staffing agencies you could reach out to when it comes to filling your IT needs.</p></ReactFitText>
            <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>As a candidate, you have the same number of options – or you could just upload your resume to any number of job boards and let them come to you, right?</p></ReactFitText>
            <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>The founder of AgileHires has the unique perspective of not only being part of a top staffing agency, but being an IT professional who dealt with recruiters dozens of times.</p></ReactFitText>
            <Grid>
              <Row className="text-center">
                <Col sm={12} lg={4}>
                  <Image responsive thumbnail className="me-image" src={Me}/><br/>
                  <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><h3>Arie Mangrum </h3></ReactFitText><i>Founder of AgileHires</i><br/><br/>
                </Col>
                <Col sm={12} lg={8}>
                  <ReactFitText minFontSize={14} maxFontSize={20} compressor={0.5}><p>AgileHires believes in supplementing the IT industry and making it better.  Built from the mindset of a former IT professional who constantly dealt with recruiters who seemed like nothing more than a "necessary evil." Then, attempting to change the industry from the inside; he worked in for a large staffing agency whose policies came off as selfish, inflexible, and impractical.  AgileHires was created to give you the opposite experience of what most staffing agencies provide. </p></ReactFitText>
                </Col>
              </Row>
            </Grid>
            <Fade><div className="home-3-container">
              <Row>
                <Col sm={12} lg={6}>
                  <Image responsive className="home-3-image" src={ZipCode}/><br/>
                </Col>
                <Col className="container-3-block" sm={12} lg={6}>
                  <h1>Change The Game</h1>
                  <p>AgileHires is excited to bring change to the recruiting industry.  We're about relationships, not resumes.  We recently teamed with CodedByKids to provide tailored technical talent to local companies.  If you need Node, Angular, Ruby, PHP, etc - they will teach it.  ZipCode students focus on Java & .NET.</p>
                  <ButtonToolbar>
                    <Button href="http://www.codedbykids.com/" bsSize="large" bsStyle="danger">Learn More</Button>
                    <Button href="/contact_us" bsSize="large" bsStyle="warning">Contact Us</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </div>
            <div className="home-3-container">
              <Row>
                <Col sm={12} lg={6}>
                  <Image responsive className="home-3-image" src={BeGroup}/><br/>
                </Col>
                <Col className="container-3-block" sm={12} lg={6}>
                  <h1>Easy To Love</h1>
                  <p>Get ready to fall in love with your talent partner.  AgileHires is the only IT recruiting agency built from the ground up to be different, and now we've partnered with the Be Group to provide outstanding Sales and Marketing candidates.</p>
                  <ButtonToolbar>
                    <Button href="https://www.begroupconnects.com/" bsSize="large" bsStyle="danger">Learn More</Button>
                    <Button href="/contact_us" bsSize="large" bsStyle="warning">Contact Us</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </div></Fade>
          </div>
        </div></Fade>
      </div>
    );
  }
}

export default AboutContainer;
