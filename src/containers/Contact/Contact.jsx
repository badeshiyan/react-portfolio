import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <main className="white-bg p-10 col-md-1">
          <h1 className="h1">FIND CONTACT INFORMATION BELOW- THANK YOU.</h1>
          {/* <hr /> */}
          <form>
            <img
              src="https://github.com/badeshiyan/bamboadeshiyan-portfolio-2020/blob/master/assets/images/headshot.jpg?raw=true"
              id="about"
              alt="aboutmeheadshot"
            />

            <p>
              <a href="mailto:badeshiyan@gmail.com" id="link">
                badeshiyan@gmail.com
              </a>
            </p>
            <p>
              <a href="mailto:bambo.tech.adeshiyan@gmail.com" id="link">
                bambo.tech.adeshiyan@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:6784380401" id="link">
                678.438.0401
              </a>
            </p>
          </form>
        </main>
      </>
    );
  }
}

export default Contact;
