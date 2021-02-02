import React from "react";
import PortfolioTitle from "../PortfolioTitle/PortfolioTitle";

const Project = ({ title, image, deployedLink, repoLink }) => {
  return (
    <div>
      <PortfolioTitle />
      <div className="card-sm-11">
        <div className="card-body">
          <h5 style={{ color: "white" }} className="card-title">
            {title}
          </h5>
          <img src={image} alt="" />
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
