import ProjectsCard from "./ProjectsCard";
import projects from "../data/projects.json";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectsSection(props) {
  return (
    <Row>
      <Col sm={12}>
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
          description={project.description}
          screenShotURL={project.screenShotURL}
          projectLink={project.projectLink}
          githubLink={project.githubLink}
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
