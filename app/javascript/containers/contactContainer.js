import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, ButtonToolbar, Well } from 'react-bootstrap';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import Twitter from '../../assets/images/twitter.png';
import Tumblr from '../../assets/images/tumblr.png';
import LinkedIn from '../../assets/images/media.png'
import Email from '../../assets/images/email.png';
import Phone from '../../assets/images/phone.png';

class ContactContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="ContactContainer" id="contact-id">
      <div className="welcome">
        <h1>Contact us.</h1>
        <div className="icon-group">
          <a href="https://twitter.com/agilehires?lang=en"><Fade delay={250}><img className="icon" src={Twitter}/></Fade></a>
          <a href="http://agilehires.tumblr.com/"><Fade delay={500}><img className="icon" src={Tumblr}/></Fade></a>
          <a href="https://www.linkedin.com/company/agilehires/"><Fade delay={750}><img className="icon" src={LinkedIn}/></Fade></a>
          <a href="mailto:arie@agilehires.com"><Fade delay={1000}><img className="icon" src={Email}/></Fade></a>
          <a href="tel:215-277-5680"><Fade delay={1250}><img className="icon" src={Phone}/></Fade></a>
        </div>
      </div>
      </div>
    );
  }
}

export default ContactContainer;
