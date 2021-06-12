import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./data/profile.json";
import experiences from "./data/experiences.json";
import ExperiencesSection from "./components/ExperiencesSection";
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
      <ExperiencesSection />

      {projects.map((project, index) => (
        <ProjectsCard
          key={index}
          name={project.name}
          description={project.description}
          ScreenShotURL={project.ScreenShotURL}
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
