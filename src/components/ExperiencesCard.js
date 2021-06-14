import React from "react";
function ExperiencesCard(props) {
  return (
    <div>
      <ul>
        <li className='list-unstyled'>
          <a href={props.companyUrl}>
            <span className='font-weight-bold'>{props.companyName}</span>
          </a>
          , {props.companyLocation} -{" "}
          <span className='font-italic'>{props.title}</span>
        </li>
        <li className='list-unstyled'>
          <small>
            {props.startDate} - {props.endDate}
          </small>
        </li>

        {props.responsibilities.map((row, index) => (
          <li key={index} className='ml-5'>
            {row.responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperiencesCard;
