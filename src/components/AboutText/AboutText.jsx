import React from "react";
import CardTitle from "../CardTitle/CardTitle";

const AboutText = () => {
  return (
    <main className="black-bg p-4">
      <CardTitle />
      <hr />
      <section className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="about-me-text col-lg-12">
            <img
              src="https://github.com/badeshiyan/bamboadeshiyan-portfolio-2020/blob/master/assets/images/headshot.jpg?raw=true"
              id="about"
              alt="aboutmeheadshot"
            />
            <h2 style={{ color: "white" }}>
              Greetings – I am Bambo Adeshiyan, and I am currently enrolled in
              Georgia Tech’s Full Stack Web Development Bootcamp. Born and
              raised in Huntsville, AL, I am of Nigerian descent and currently
              reside in the Atlanta metro area. Earning both a Bachelor of Arts
              and Master of Arts degrees in Communications from Alabama State
              University and Howard University, respectively, I have several
              years of public relations, brand management and account management
              experience. Upon completion of the bootcamp, I will be well-versed
              and knowledgeable in the following web development concepts:
              HTML5, CSS, Bootstrap, JavaScript, jQuery, Node.js, Express.js,
              MySQL, MongoDB, React, C#, ASP.NET, Heroku/Git deployment, among
              many others. With this skillset, it is my intent to join a team in
              a tech project management capacity.
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutText;
