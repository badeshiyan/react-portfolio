import React, { Component } from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard.jsx";
import projects from "../../projects.json";

class Portfolio extends Component {
  state = {
    projects,
  };
  render() {
    return (
      <>
        {this.state.projects.map((project) => (
          <ProjectCard
            title={project.name}
            repoLink={project.link2}
            deployedLink={project.link}
            image={project.image}
          />
        ))}
      </>
    );
  }
}

export default Portfolio;
