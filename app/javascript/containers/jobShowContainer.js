import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

class JobShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applyModal: false
    }
  }

  render() {
    let date = this.props.job.created_at
    let date2 = new Date(date).toLocaleDateString("en-us")
    console.log(date2)

    return (
      <div className="JobShowContainer">
        <Grid className="home-2-container">
          <Row>
            <Col sm={12} className="text-center">
              <h3>{this.props.job.title}</h3>
            </Col>
          </Row>
          <Row>
            <Fade delay={150}><Col sm={12} className="job-details">
              <p className="detail">Location:</p><p>{this.props.job.city}, {this.props.job.state}<br/>{this.props.job.zipcode}</p>
              <p className="detail">Summary:</p><p>{this.props.job.summary}</p>
              <p className="detail">Description:</p><p>{this.props.job.description}</p>
              <p className="detail">Expectations:</p><p>{this.props.job.expectations}</p>
              <p className="detail">Requirements:</p><p>{this.props.job.requirements}</p>
              <i>Posted on: {date2}</i><br/>
              <Button bsSize="large" bsStyle="success">APPLY!</Button>
              <Button href="/jobs/" bsSize="large" bsStyle="warning">Back to Jobs</Button>
            </Col></Fade>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default JobShowContainer;
