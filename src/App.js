import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./data/profile.json";
import experiences from "./data/experiences.json";
import ExperiencesCard from "./components/ExperiencesCard";
import skills from "./data/skills.json";
import SkillsCard from "./components/SkillsCard";
import projects from "./data/projects.json";
import ProjectsCard from "./components/ProjectsCard";
import education from "./data/education.json";
import EducationCard from "./components/EducationCard";
import basicInfo from "./data/basicInfo.json";
import BasicInfoCard from "./components/BasicInfoCard";
import socialMedias from "./data/socialMedias.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container>
      {/* <Navbar /> */}
      <BasicInfoCard
        name={basicInfo.name}
        position={basicInfo.position}
        address={basicInfo.address}
        phone={basicInfo.phone}
        email={basicInfo.email}
        socialMedias={socialMedias}
      />
      <h6>EXPERIENCE</h6>
      {experiences.map((experience, index) => (
        <ExperiencesCard
          key={index}
          companyName={experience.companyName}
          companyUrl={experience.companyUrl}
          companyLocation={experience.companyLocation}
          roles={experience.roles}
        />
      ))}

      {skills.map((skill, index) => (
        <SkillsCard key={index} area={skill.area} skillSet={skill.skillSet} />
      ))}

      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          name={project.name}
          description={project.description}
          ScrenShotURL={project.ScrenShotURL}
          projectLink={project.projectLink}
          githubLink={project.githubLink}
        />
      ))}

      {education.map((school, index) => (
        <EducationCard
          key={index}
          schoolName={school.schoolName}
          degree={school.degree}
        />
      ))}
    </Container>
  );
}

export default App;
