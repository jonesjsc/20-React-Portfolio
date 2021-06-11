import React from "react";
function ExperiencesCard(props) {
  return (
    <div>
      {props.companyName}
      {props.companyUrl}
      {props.companyLocation}
    </div>
  );
}

export default ExperiencesCard;
