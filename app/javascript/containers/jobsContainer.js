import React from 'react';
import JobCard from '../components/jobCard';
import { Carousel, Image, Navbar, NavItem, MenuItem, NavDropdown, Nav, PanelGroup, Panel, Grid, Row, Col, Button, Well, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import JobsCarousel from '../components/jobsCarousel';
import SearchInput, {createFilter} from 'react-search-input'
const KEYS_TO_FILTERS = ['job.city']

class JobsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: this.props.jobs,
      searchTerm: '',
      filtered: this.props.jobs
    }
    this.searchUpdated = this.searchUpdated.bind(this)
    this.handleSearchQuery = this.handleSearchQuery.bind(this)
  }

  searchUpdated(term){
    let input = term.target.value
    if (input != null){
      this.setState({searchTerm: input});
      this.handleSearchQuery();
    }
  }

  handleSearchQuery(){
    let search = this.state.searchTerm.toLowerCase();
    let newState = [];
    for (let i = 0; i < this.props.jobs.length; i++) {
      if (this.props.jobs[i].title.toLowerCase().includes(search)){
        newState.push(this.state.jobs[i])
      }
    };
    this.setState({ filtered: newState });
  }

  render() {
    console.log(this.state);
    let jobs = this.state.filtered.map(job => {
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
        <JobsCarousel/>
      </div>
        <div>
          <Grid className="home-2-container">
          <h1>Jobs</h1>
            <FormGroup controlId="formFilter">
              <ControlLabel>Filter by Job Title</ControlLabel>
              <FormControl type="text" className="search-input" onChange={this.searchUpdated}/>
            </FormGroup>
            {jobs}
          </Grid>
        </div>
      </div>
    );
  }
}

export default JobsContainer;
