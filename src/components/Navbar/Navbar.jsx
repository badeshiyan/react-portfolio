import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="/about">
          Bambo Adeshiyan
        </a> */}
        <Link to="/about" className="navbar-brand">
          Bambo Adeshiyan
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link"
                activeClassName="active"
              >
                Portfolio
              </NavLink>
              {/* <a
                className="nav-link active"
                aria-current="page"
                href="/portfolio"
              >
                Portfolio
              </a> */}
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/contact">
                Contact
              </a> */}
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
