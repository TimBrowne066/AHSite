import React from 'react';

class JobShowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let date = this.props.job.created_at
    let date2 = new Date(date).toLocaleDateString("en-us")
    console.log(date2)

    return (
      <div className="JobShowContainer">
        <h1>Job Show Container</h1>
        <h3>{this.props.job.title}</h3>
        <p>{this.props.job.city}, {this.props.job.state}<br/>{this.props.job.zipcode}</p>
        <p>{this.props.job.summary}</p>
        <p>{this.props.job.description}</p>
        <p>{this.props.job.requirements}</p>
        <p>{date2}</p>

      </div>
    );
  }
}

export default JobShowContainer;
