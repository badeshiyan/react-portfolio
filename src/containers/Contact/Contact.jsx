import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="container" style={{ padding: "55px" }}>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Contact Me</h5>

                  <input
                    className="input"
                    type="text"
                    placeholder="Name"
                    id="userName"
                  />
                  <br />
                  <input
                    className="input"
                    type="text"
                    placeholder="Email"
                    id="userEmail"
                  />
                  <br />
                  <input
                    className="input"
                    type="text"
                    placeholder="Message"
                    id="userMessage"
                  />
                  <br />

                  <button
                    className="btn btn-primary"
                    style={{ marginTop: "10px" }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

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
