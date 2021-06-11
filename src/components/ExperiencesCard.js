import React from "react";
function ExperiencesCard(props) {
  return (
    <div>
      {props.companyName}
      {props.companyUrl}
      {props.companyLocation}
      {props.roles.map((role) => (
        <div>
          <li>{role.title}</li>
          <li>{role.responsibilities}</li>
          <li>{role.startDate}</li>
          <li>{role.endDate}</li>
        </div>
      ))}
    </div>
  );
}

export default ExperiencesCard;
