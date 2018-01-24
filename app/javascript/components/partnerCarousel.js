import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

const PartnerCarousel = (props) => {
  return (
    <div className="PartnerCarousel">
      <Carousel>
        <Carousel.Item>
          <Image className="carousel-image" src={}/>
          <Carousel.Caption>
            <h3>Hello</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="carousel-image" src={}/>
          <Carousel.Caption>
            <h3>Hello</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image className="carousel-image" src={}/>
          <Carousel.Caption>
            <h3>Hello</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default PartnerCarousel;
