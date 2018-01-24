import React from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

const JobCard = (props) => {
  let date = props.time
  let date2 = new Date(date).toLocaleDateString("en-us")
  return (
    <Row>
      <Col sm={12}>
        <div className="JobCard">
          <Button className="link-button" href={"/jobs/"+props.id}>{props.title}</Button>
          <p><i>{props.city}, {props.state}</i></p>
          <b>About:</b>
          <p>{props.summary}</p>
          <br/>
          <i>Posted on:</i>
          <i>{date2}</i>
        </div>
      </Col>
    </Row>
  )
}

export default JobCard;
