import EducationCard from "./EducationCard";
import education from "../data/education.json";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function EducationSection(props) {
  return (
    <Row>
      <Col sm={12}>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              EDUCATION
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body className='d-flex justify-content-around flex-wrap'>
                {education.map((school, index) => (
                  <EducationCard
                    key={index}
                    schoolName={school.schoolName}
                    degree={school.degree}
                  />
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
    </Row>
  );
}
export default EducationSection;
