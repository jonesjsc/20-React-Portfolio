import React from "react";
function ProjectsCard(props) {
  return (
    <div>
      {props.name}
      {props.description}
      {props.ScrenShotURL}
      {props.propsLink}
      {props.githubLink}
    </div>
  );
}

export default ProjectsCard;
