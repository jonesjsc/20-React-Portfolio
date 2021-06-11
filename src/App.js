import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "./data/profile.json";
import socialMedias from "./data/socialMedias.json";
import SocialMediaCard from "./components/SocialMediaCard";
import experiences from "./data/experiences.json";
import ExperiencesCard from "./components/ExperiencesCard";

function App() {
  React.state = {
    profile,
    socialMedias,
  };

  return (
    <div>
      <Navbar />
      {profile.name}
      {profile.position}
      {profile.address}
      {profile.phone}
      {profile.email}
      {socialMedias.map((socialMedia) => (
        <SocialMediaCard tag={socialMedia.tag} url={socialMedia.url} />
      ))}

      {experiences.map((experience) => (
        <ExperiencesCard
          companyName={experience.companyName}
          companyUrl={experience.companyUrl}
          companyLocation={experience.companyLocation}
          roles={experience.roles}
        />
      ))}
    </div>
  );
}

export default App;
