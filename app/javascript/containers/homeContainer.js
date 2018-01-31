import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, ButtonToolbar, Well } from 'react-bootstrap';
import Logo from '../../assets/images/logo1.png';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Twitter from '../../assets/images/twitter.png';
import Tumblr from '../../assets/images/tumblr.png';
import LinkedIn from '../../assets/images/media.png'
import Email from '../../assets/images/email.png';
import Phone from '../../assets/images/phone.png';
import BeGroup from '../../assets/images/postcard_1_valentines_sample_small.png';
import ZipCode from '../../assets/images/postcard_1_linkedin_picture.png'

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
          <div className="text-center homeLogo" >
              <Image className="homeLogoImage" src={Logo}/>
          </div>
              <div className="welcome">
                <h1>The IT recruiting model is broken.</h1>
                <Zoom delay={500}><h2>So we fixed it.</h2></Zoom>
                <div className="icon-group">
                  <a href="https://twitter.com/agilehires?lang=en"><Fade delay={250}><img className="icon" src={Twitter}/></Fade></a>
                  <a href="http://agilehires.tumblr.com/"><Fade delay={500}><img className="icon" src={Tumblr}/></Fade></a>
                  <a href="https://www.linkedin.com/company/agilehires/"><Fade delay={750}><img className="icon" src={LinkedIn}/></Fade></a>
                  <a href="mailto:arie@agilehires.com"><Fade delay={1000}><img className="icon" src={Email}/></Fade></a>
                  <a href="tel:215-277-5680"><Fade delay={1250}><img className="icon" src={Phone}/></Fade></a>
                </div>
              </div>
          <div className="arrow">
            <a href="#home-2"><i className="fa fa-chevron-down"></i></a>
          </div>
        </div>
        <div className="section" id="home-2">
          <Fade><div className="home-2-container">
              <Row className="container-2-title">
                <Col sm={12}>
                  <h1>IT STAFFING FOR TODAY.</h1>
                  <p>AgileHires was born out of the idea that IT recruiting was a good concept, but could be done much better. Find out why AgileHires is IT Recruiting for Today. Our recruiting efforts are focused in Pennsylvania, New Jersey, and Delaware.</p>
                </Col>
              </Row>
              <Row>

              <Col className="text-center" sm={12} lg={4}>
                <h1>For clients:</h1>
                <div className="info-bubble">
                  <p>Fees starting at</p>
                  <h1>15%</h1>
                </div>
                  <ul>
                    <li>Every one of our experienced recruiters has first-hand knowledge of the IT industry.</li>
                    <li>We are able to be flexible, with fees that start at 15% and payment plans available.</li>
                    <li>We utilize most available resources for finding the perfect candidate.</li>
                    <li>We rely on connections gained through years of experience in IT, not just the job boards.</li>
                    <li>We take time to meet each candidate in person to determine if they are indeed a great fit.</li>
                  </ul>
              </Col>
                <Col className="text-center" sm={12} lg={4}>
                  <h1>For candidates:</h1>
                  <div className="info-bubble">
                    <p>Our recruiters have</p>
                    <h1 className="real-it-experience">REAL IT EXPERIENCE</h1>
                  </div>
                    <ul>
                      <li>With knowledge of the IT industry, we can provide valuable detail about actual job responsibilities.</li>
                      <li>We deliver specifics about the role, the company, and the team you will be a part of.</li>
                      <li>We give feedback on your resume, helping make you more attractive on the job market.</li>
                      <li>We will provide consistent follow up and feedback as to why you did not get an interview or were not hired.</li>
                      <li>If you are actively seeking, we will market you to open positions rather than letting your resume sit in a pile.</li>
                    </ul>
                </Col>
                <Col className="text-center" sm={12} lg={4}>
                  <h1>The Competition:</h1>
                  <div className="info-bubble">
                    <p>Fees as high as</p>
                    <h1>22%</h1>
                  </div>
                    <ul>
                      <li>Recruiters rarely ever have backgrounds in technology, and cannot convey the specifics of a role.</li>
                      <li>They use the job boards(Monster, Careerbuilder, etc) 90% of the time (which you could have paid for yourself!).</li>
                      <li>Usually find and forward resumes after a quick phone conversation (or none at all!).</li>
                      <li>They provide no feedback, but they will modify your resume without you asking at times.</li>
                      <li>They leave your resume to collect dust, only calling you when they have a job that you could be a fit for.</li>
                    </ul>
                </Col>
              </Row>
              <Row className="container-2-title">
                <Col sm={12}>
                  <p className="text-center">At AgileHires, we have a passion for how recruiting should be done. We’re confident you won’t be disappointed with your experience with us. Any more questions? Please email us!</p>
                </Col>
              </Row>
          </div></Fade>
        </div>
        <div className="section" id="home-3">
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
                  <Button href="/contact" bsSize="large" bsStyle="warning">Contact Us</Button>
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
                  <Button href="/contact" bsSize="large" bsStyle="warning">Contact Us</Button>
                </ButtonToolbar>
              </Col>
            </Row>
          </div></Fade>
        </div>
        <div className="section" id="home-4">
          <div className="text-center home-4-container">
            <Image className="homeLogoImage" src={Logo}/>
            <p>AgileHires © 2018 | All Rights Reserved</p>
            <div className="icon-group">
              <a href="https://twitter.com/agilehires?lang=en"><Fade delay={250}><img className="icon" src={Twitter}/></Fade></a>
              <a href="http://agilehires.tumblr.com/"><Fade delay={500}><img className="icon" src={Tumblr}/></Fade></a>
              <a href="https://www.linkedin.com/company/agilehires/"><Fade delay={750}><img className="icon" src={LinkedIn}/></Fade></a>
              <a href="mailto:arie@agilehires.com"><Fade delay={750}><img className="icon" src={Email}/></Fade></a>
              <a href="tel:215-277-5680"><Fade delay={1000}><img className="icon" src={Phone}/></Fade></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
