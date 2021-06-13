import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EducationCard(props) {
  return (
    <Row>
      <Col>
        <strong>{props.schoolName}</strong> - {props.degree}
      </Col>
    </Row>
  );
}

export default EducationCard;
