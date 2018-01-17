import React from 'react';

const JobCard = (props) => {
  return (
    <div className="JobCard">
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
    </div>
  )
}

export default JobCard;
