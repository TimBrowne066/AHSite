import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import { Modal } from 'simple-react-bootstrap';
import axios, { post } from 'axios';

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
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }

  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
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
          <Row className="job-row">
            <Fade delay={150}><Col lg={12} className="job-details">
              <p className="detail">Location:</p><p>{this.props.job.city}, {this.props.job.state}<br/>{this.props.job.zipcode}</p>
              <p className="detail">Summary:</p><p>{this.props.job.summary}</p>
              <p className="detail">Description:</p><p>{this.props.job.description}</p>
              <p className="detail">Expectations:</p><p>{this.props.job.expectations}</p>
              <p className="detail">Requirements:</p><p>{this.props.job.requirements}</p>
              <i>Posted on: {date2}</i><br/>
              <Button bsStyle="success" onClick={this.handleClick}>APPLY!</Button>
              <Button href="/jobs/" bsStyle="warning">Back to Jobs</Button>
            </Col></Fade>
          </Row>
        </Grid>
        <Modal className="fade" show={this.state.applyModal} onHide={() => this.setState({ applyModal: false })}>
          <iframe id="JotFormIFrame-80325726619157" onLoad="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" src="https://form.jotform.com/80325726619157" frameborder="0" scrolling="yes" > </iframe>
        </Modal>
      </div>
    );
  }
}

export default JobShowContainer;
