import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Route exact path='/' component={MainPage} />
        <Route exact path='/Projects' component={ProjectsPage} />
      </Container>
    </Router>
  );
}

export default App;
