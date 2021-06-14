import React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectsCard(props) {
  console.log("PROJECT PROPS", props);
  return (
    // <div>
    <div className='d-flex p-2 align-items-stretch'>
      <Card style={{ width: "20rem" }}>
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{props.name}</Card.Title>
          <Card.Img
            variant='top'
            src={`${process.env.PUBLIC_URL}${props.screenShotURL}`}
          />
          {/* 
              I want the Deployed and Repo icons to be at the bottom of this div - 
              but react-bootstrap doesn't have a "flex 1" so thats what we're doing here 
            */}

          <Card.Text style={{ flex: 1 }}>{props.description}</Card.Text>
          <div className='d-flex justify-content-end'>
            <Card.Link
              href={`${props.projectLink}`}
              className='badge badge-dark justify-content-end'
            >
              Deployed
            </Card.Link>
            <Card.Link
              href={`${props.githubLink}`}
              className='badge badge-dark justify-content-end'
            >
              Repo
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectsCard;
