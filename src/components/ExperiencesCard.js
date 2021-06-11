import React, { Fragment } from "react";
function ExperiencesCard(props) {
  return (
    <div>
      {props.companyName}
      {props.companyUrl}
      {props.companyLocation}
      {props.roles.map((role, index) => (
        // <div key={index}>
        <Fragment key={index}>
          <li key={index + role.title}>{role.title}</li>
          <li key={index + role.responsibilities}>{role.responsibilities}</li>
          <li key={index + role.startDate}>{role.startDate}</li>
          <li key={index + role.endDate}>{role.endDate}</li>
        </Fragment>
      ))}
    </div>
  );
}

export default ExperiencesCard;
