import ExperiencesCard from "./ExperiencesCard";
import experiences from "../data/experiences.json";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import skills from "../data/skills.json";
import SkillsCard from "./SkillsCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
//onclick accordian tolggle to change defaultactive key from zero or empty line 15
function ExperiencesSection(props) {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <Row>
      <Col sm={8}>
        <Accordion defaultActiveKey={activeKey}>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              eventKey='0'
              onClick={() => setActiveKey()}
            >
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
        <Accordion defaultActiveKey={activeKey}>
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
