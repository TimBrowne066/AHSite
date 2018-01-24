import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import Job1 from '../../assets/images/job1.jpg';
import Job2 from '../../assets/images/job2.jpg';
import Job3 from '../../assets/images/job3.jpg';

const JobsCarousel = (props) => {
  return (
    <div className="JobsCarousel">
      <Carousel prevIcon='' nextIcon='' indicators={false}>
        <Carousel.Item>
          <Image className="carousel-image" src={Job1}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="carousel-image" src={Job2}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="carousel-image" src={Job3}/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default JobsCarousel;
