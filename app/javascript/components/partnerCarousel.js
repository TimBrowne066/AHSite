import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import Car1 from '../../assets/images/postcard_1_linkedin_picture.png';
import Car2 from '../../assets/images/postcard_1_valentines_sample_small.png';

const PartnerCarousel = (props) => {
  return (
    <div className="PartnerCarousel">
      <Carousel prevIcon='' nextIcon='' indicators={false}>
        <Carousel.Item>
          <Image className="carousel-image" src={Car1}/>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="carousel-image" src={Car2}/>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PartnerCarousel;
