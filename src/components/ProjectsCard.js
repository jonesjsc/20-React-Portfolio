import React from "react";
import Card from "react-bootstrap/Card";

function ProjectsCard(props) {
  return (
    <div>
      <Card>
        <Card.Header>{props.screenShotURL}</Card.Header>
        {props.name}
        {props.description}
        {props.screenShotURL}
        {props.propsLink}
        {props.githubLink}
        <Card style={{ width: "18rem" }}>
          <Card.Img variant='top' src='${process.env.PUBLIC_URL}' />

          <Card.Body>
            <Card.Title>{props.screenShotURL}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href='#'>Card Link</Card.Link>
            <Card.Link href='#'>Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Card>
    </div>
  );
}

export default ProjectsCard;
