import React from 'react';
import JobCard from '../components/jobCard';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well } from 'react-bootstrap';

class JobsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs,
    }
  }

  render() {
    let jobs = this.props.jobs.map(job => {
      return(
        <JobCard
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
        />
      )
    })
    return (
      <div className="JobsContainer">
        <div>
          <Grid>
            <h1>Jobs Container</h1>
            {jobs}
          </Grid>
        </div>
      </div>
    );
  }
}

export default JobsContainer;
