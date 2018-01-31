import React from 'react';
import { FormGroup, ControlLabel, FormControl, Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, ButtonToolbar, Well } from 'react-bootstrap';
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
      email: "",
      body: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }

  render() {

    return (
      <div className="ContactContainer section" id="contact-id">
        <form className="form-title" action="http://www.agilehires.com/cgi-sys/formmail.pl" method="post">
          <h1>Contact AgileHires</h1>
          <FormGroup controlId="recipient">
            <FormControl
              type="hidden"
              name="recipient"
              value="arie@agilehires.com"
            />
          </FormGroup>
          <FormGroup controlId="subject">
            <FormControl
              type="hidden"
              name="subject"
              value="New Message!"
            />
          </FormGroup>
          <FormGroup controlId="email">
            <ControlLabel>Your Email Address:</ControlLabel>
            <FormControl
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="body">
            <ControlLabel>Your Message:</ControlLabel>
            <FormControl
              type="text"
              name="body"
              id="contact-body"
              componentClass="textarea"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button bsStyle="warning" type="submit" name="submit">Get in Touch!</Button>
          <FormGroup controlId="redirect">
            <FormControl
              type="hidden"
              name="redirect"
              value="/"
            />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default ContactContainer;
