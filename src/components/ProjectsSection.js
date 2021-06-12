import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectsSection(props) {
  return (
    <Row>
      <Col sm={8}>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey='0'>
              PROJECTS
            </Accordion.Toggle>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                {projects.map((project, index) => (
                  <ProjectsCard
                    key={index}
                    name={project.name}
                    description={experience.companyUrl}
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
export default ProjectsSection;
