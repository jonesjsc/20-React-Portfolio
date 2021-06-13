import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

import ButtonGroup from "react-bootstrap/ButtonGroup";

function ProjectsCard(props) {
  console.log("PROJECT PROPS", props);
  return (
    // <div>
    <div className='d-flex p-2 align-items-stretch'>
      {/* <Card style={{ width: "18rem" }}> */}
      <Card style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Img
            variant='top'
            src={`${process.env.PUBLIC_URL}${props.screenShotURL}`}
          />
          <Card.Text>{props.description}</Card.Text>
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
