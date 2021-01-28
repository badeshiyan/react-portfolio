import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/about">
            About
          </a>
          <a className="navbar-brand" href="/portfolio">
            Portfolio
          </a>
          <a className="navbar-brand" href="/contact">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
