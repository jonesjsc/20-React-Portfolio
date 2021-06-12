import ExperiencesCard from "./ExperiencesCard";
import experiences from "../data/experiences.json";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import skills from "../data/skills.json";
import SkillsCard from "./SkillsCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ExperiencesSection(props) {
  return (
    <Row>
      <Col sm={8}>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              EXPERIENCE
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                {experiences.map((experience, index) => (
                  <ExperiencesCard
                    key={index}
                    companyName={experience.companyName}
                    companyUrl={experience.companyUrl}
                    companyLocation={experience.companyLocation}
                    title={experience.title}
                    responsibilities={experience.responsibilities}
                    startDate={experience.startDate}
                    endDate={experience.endDate}
                  />
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Col>
      <Col>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              SKILLS
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                {skills.map((skill, index) => (
                  <SkillsCard
                    key={index}
                    area={skill.area}
                    skillSet={skill.skillSet}
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
export default ExperiencesSection;
