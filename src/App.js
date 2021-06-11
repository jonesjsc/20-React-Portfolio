import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./data/profile.json";
import socialMedias from "./data/socialMedias.json";
import SocialMediaCard from "./components/SocialMediaCard";
import experiences from "./data/experiences.json";
import ExperiencesCard from "./components/ExperiencesCard";
import skills from "./data/skills.json";
import SkillsCard from "./components/SkillsCard";
import projects from "./data/projects.json";
import ProjectsCard from "./components/ProjectsCard";
import education from "./data/education.json";
import EducationCard from "./components/EducationCard";

function App() {
  React.state = {
    profile,
    socialMedias,
    experiences,
    skills,
  };

  return (
    <div>
      <Navbar />
      {profile.name}
      {profile.position}
      {profile.address}
      {profile.phone}
      {profile.email}
      {socialMedias.map((socialMedia, index) => (
        <SocialMediaCard
          key={index + socialMedia.tag}
          tag={socialMedia.tag}
          url={socialMedia.url}
        />
      ))}

      {experiences.map((experience, index) => (
        <ExperiencesCard
          key={index + experience.companyName}
          companyName={experience.companyName}
          companyUrl={experience.companyUrl}
          companyLocation={experience.companyLocation}
          roles={experience.roles}
        />
      ))}

      {skills.map((skill, index) => (
        <SkillsCard
          key={index + skill.area}
          area={skill.area}
          skillSet={skill.skillSet}
        />
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
    </div>
  );
}

export default App;
