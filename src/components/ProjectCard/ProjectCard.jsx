import React from "react";
import projects from "../../projects.json";

const Project = ({ title, text, image, deployedLink, repoLink }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default Project;
