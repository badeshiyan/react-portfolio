import React from "react";
import {
  LinkedinOutlined,
  GithubOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer>
      {" "}
      <div className="footer" className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/bambo-a-594543187/"
            >
              <LinkedinOutlined />
            </a>
            <a target="_blank" href="https://github.com/badeshiyan">
              <GithubOutlined />
            </a>
            <a
              target="_blank"
              href="https://www.dropbox.com/s/cs65zpf0jz35d4e/badeshiyan2021.pdf?dl=0"
            >
              <FilePdfOutlined />
            </a>
          </div>
          <div className="col-md-6 d-flex align-items-center align-self-center">
            &copy; Copyright 2021 Bambo Adeshiyan
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
