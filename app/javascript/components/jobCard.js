import React from 'react';

const JobCard = (props) => {
  let date = props.time
  let date2 = new Date(date).toLocaleDateString("en-us")
  return (
    <div className="JobCard">
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
      <p>{date2}</p>
    </div>
  )
}

export default JobCard;
