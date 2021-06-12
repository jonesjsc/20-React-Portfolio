import React, { Fragment } from "react";
import SocialMediaCard from "./SocialMediaCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

function BasicInfoCard(props) {
  return (
    <Fragment>
      <Row>
        <Col sm={8}>
          <h1 className='display-4'>
            <strong>{props.name}</strong>
          </h1>
          <h6>{props.position}</h6>
        </Col>
        <Col sm={4}>
          <ul className='list-unstyled'>
            <li>
              <small>{props.address}</small>
            </li>
            <li>
              <small>{props.phone}</small>
            </li>
            <li>
              <small>
                <a href={"mailto:" + props.email}>{props.email}</a>
              </small>
            </li>
            <li>
              <small>
                {props.socialMedias.map((socialMedia, index) => (
                  <SocialMediaCard
                    key={index}
                    tag={socialMedia.tag}
                    url={socialMedia.url}
                  />
                ))}
              </small>
            </li>
          </ul>
        </Col>
      </Row>
    </Fragment>
  );
}

export default BasicInfoCard;
