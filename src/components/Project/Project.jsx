import React from "react";

const Project = ({ title, text, image, deployedLink, repoLink }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  );
};

export default Project;
