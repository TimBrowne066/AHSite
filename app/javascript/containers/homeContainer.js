import React from 'react';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <div className="HomeContainer">
        <section id="home-1">
          <Grid>
            <Row className="welcome">
              <Col className="text-center" sm={8} smOffset={2}>
                <h1 className="text-center">Hello</h1>
              </Col>
            </Row>
          </Grid>
        </section>
        <section id="home-2"></section>
        <section id="home-3"></section>
        <section id="home-4"></section>
      </div>
    );
  }
}

export default HomeContainer;
