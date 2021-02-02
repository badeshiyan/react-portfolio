import React from "react";

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div>
      <div className="card-sm-6">
        <div className="card-body">
          <img src={image} alt="" />
          <h5 style={{ color: "white" }}className="card-title">{title}</h5>
        </div>
        <div className="card-body">
          <a href={deployedLink} className="card-link">
            Deployed Site Link
          </a>
          <a href={repoLink} className="card-link">
            Github Repo Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
