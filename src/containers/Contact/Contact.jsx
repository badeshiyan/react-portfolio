import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <main className="white-bg p-2">
          <h1 className="h1">Contact Information</h1>
          {/* <hr /> */}
          <form>
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
