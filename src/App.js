import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import BasicSection from "./components/BasicSection";
import ExperiencesSection from "./components/ExperiencesSection";
import EducationSection from "./components/EducationSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <Container>
      <Navbar />
      <BasicSection />
      <ExperiencesSection />
      <EducationSection />
      <ProjectsSection />
    </Container>
  );
}

export default App;
