import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";

function ProjectsCard(props) {
  console.log("PROJECT PROPS", props);
  return (
    <Fragment>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant='top'
            src={`${process.env.PUBLIC_URL}${props.screenShotURL}`}
          />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Card.Link href={`${props.projectLink}`}>Deployed</Card.Link>
            <Card.Link href={`${props.githubLink}`}>Repo</Card.Link>
          </Card.Body>
        </Card>
    </Fragment>
  );
}

export default ProjectsCard;
