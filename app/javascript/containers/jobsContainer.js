import React from 'react';
import JobCard from '../components/jobCard';

class JobsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
        />
      )
    })
    return (
      <div className="JobsContainer">
        <h1>Jobs Container</h1>
        {jobs}
      </div>
    );
  }
}

export default JobsContainer;
