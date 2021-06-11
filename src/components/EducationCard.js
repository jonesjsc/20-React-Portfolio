import React from "react";
function EducationCard(props) {
  return (
    <div>
      {props.schoolName}
      {props.degree}
    </div>
  );
}

export default EducationCard;
