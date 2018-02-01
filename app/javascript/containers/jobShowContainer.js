import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import { Modal } from 'simple-react-bootstrap';

class JobShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applyModal: false,
      email: '',
      file: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(){
    this.setState({ applyModal: true })
  }

  handleChange(e){
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
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
              <Button bsSize="large" bsStyle="success" onClick={this.handleClick}>APPLY!</Button>
              <Button href="/jobs/" bsSize="large" bsStyle="warning">Back to Jobs</Button>
            </Col></Fade>
          </Row>
        </Grid>
        <Modal className="fade" show={this.state.applyModal} onHide={() => this.setState({ applyModal: false })}>
          <Modal.Body className="apply-modal">
            <h1>{this.props.job.title}</h1>
            <form className="form-title" action="http://www.agilehires.com/cgi-sys/formmail.pl" method="post">
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
                  value={this.props.job.title}
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
              <FormGroup controlId="file">
                <ControlLabel>Attach Your Resume:</ControlLabel>
                <FormControl
                  type="file"
                  name="file"
                  value={this.state.file}
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button bsStyle="info" type="submit" name="submit">Apply!</Button>
              <FormGroup controlId="redirect">
                <FormControl
                  type="hidden"
                  name="redirect"
                  value="http://agilehires.com"
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-danger" onClick={() => this.setState({ applyModal: false })}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default JobShowContainer;
