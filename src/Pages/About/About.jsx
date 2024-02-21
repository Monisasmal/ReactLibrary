import React from "react";
import "./About.css";
import aboutImg from "../../images/AboutImage.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="about iage" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookStore</h2>
            <p className="fs-17">
              Libraries play a crucial role in promoting literacy, fostering
              intellectual growth, and supporting lifelong learning. They
              provide equitable access to information regardless of
              socioeconomic status, making them indispensable community assets.
            </p>
            <p className="fs-17">
              In addition to lending materials, libraries often offer services
              such as reference assistance, computer and internet access,
              educational programs, and cultural events. Many libraries also
              serve as community hubs, providing meeting spaces, study areas,
              and opportunities for social interaction.
            </p>
            <p className="fs-17">
              With the advent of digital technology, libraries have evolved to
              offer digital collections, online databases, and e-books, ensuring
              that patrons can access information remotely. Despite these
              changes, the fundamental mission of libraries remains the same: to
              connect people with knowledge and empower them to explore, learn,
              and engage with the world around them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
