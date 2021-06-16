import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";

import Container from "react-bootstrap/Container";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import BasicSection from "./components/BasicSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <BasicSection></BasicSection>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/Projects' component={ProjectsPage} />
        <Footer></Footer>
      </Container>
    </Router>
  );
}

export default App;
