import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import BasicSection from "./components/BasicSection";
import ExperiencesSection from "./components/ExperiencesSection";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Route path='/' component={BasicSection} />
        <Route exact path='/Experiences' component={ExperiencesSection} />
        <Route exact path='/Projects' component={ProjectsSection} />
      </Container>
    </Router>
  );
}

export default App;
