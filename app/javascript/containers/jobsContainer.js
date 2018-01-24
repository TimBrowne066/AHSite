import React from 'react';
import JobCard from '../components/jobCard';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';
import JobsCarousel from '../components/jobsCarousel';

class JobsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs,
    }
  }

  render() {
    let jobs = this.state.jobs.map(job => {
      return(
        <Fade delay={500}><JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          summary={job.summary}
          description={job.description}
          expectations={job.expectations}
          requirements={job.requirements}
          time={job.created_at}
          city={job.city}
          state={job.state}
          zipcode={job.zipcode}
        /></Fade>
      )
    })
    return (

      <div className="JobsContainer">
      <div>
        <JobsCarousel/>
      </div>
        <div>
          <Grid className="home-2-container">
          <h1>Jobs</h1>
            {jobs}
          </Grid>
        </div>
      </div>
    );
  }
}

export default JobsContainer;
