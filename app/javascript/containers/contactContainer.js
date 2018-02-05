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
      <div className="ContactContainer section" id="contact-id">

        <iframe id="JotFormIFrame-80325267019151" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" src="https://form.jotform.com/80325267019151" frameborder="0" scrolling="yes" > </iframe>

      </div>
    );
  }
}

export default ContactContainer;
