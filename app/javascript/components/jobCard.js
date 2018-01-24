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
          <a href={"/jobs/"+props.id}>{props.title}</a>
          <p>{props.city}, {props.state}</p>
          <p>{props.summary}</p>
          <p>{date2}</p>
        </div>
      </Col>
    </Row>
  )
}

export default JobCard;
