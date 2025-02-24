import React from "react";
import "../styles/MyJourney.css";
const MyJourney: React.FC = () => {
  return (
    <>
      <h3>Explore my journey</h3>
      <div id="journey" className="my-journey-holder">
        <div className="flex-item">
          <h4>Education</h4>
          <h5>
            <span>
              Web Developer (.NET) Jönköping University, School of Engineering{" "}
            </span>
            | Aug 2024 – June 2026
          </h5>
          <p>
            Focused on modern web systems, their development, and security.
            Specialized in advanced web system development using technologies
            like ASP.NET and MVC. Experience in creating web applications with
            C# and .NET, along with user-friendly, modern interfaces.
            Project-based work in self-organizing teams with an emphasis on
            customer value and product quality.
          </p>
          <h5>
            <span>Front-End Developer Medieinstitutet </span> | Oct 2021 – June
            2023
          </h5>
          <p>
            Web development with a focus on various APIs and frameworks. Target
            audience-oriented web development with attention to usability,
            accessibility, and user experience (UX).
          </p>
        </div>
        <div className="flex-item">
          <h4>Experience</h4>
          <h5>
            <span>Frontend Developer - Internship Dear Friends</span> | Feb 2023
            – June 2023
          </h5>
          <p>
            Participated in various projects as a Frontend Developer. Took
            initiative and handled tasks independently. Worked with tools and
            technologies such as React, Next.js, WordPress, DatoCMS, and
            GraphQL.
          </p>
          <h5>
            <span>Web Developer - Internship MKmedia </span> | Nov 2022 – Dec
            2023
          </h5>
          <p>
            Gained extensive knowledge of WordPress (ACF) and acquired some
            experience with jQuery and Twig.
          </p>
          <h5>
            <span>
              Sales Associate / Assistant Store Manager / Visual Merchandiser
              DEICHMANN SKO{" "}
            </span>
            | Aug 2018 – July 2021
          </h5>
          <p>
            Worked as a Sales Associate for two years before taking on the role
            of Assistant Store Manager for six months and Visual Merchandiser
            for one year. Learned to make quick decisions when needed and
            resolve most issues that arise during a workday.
          </p>
        </div>
      </div>
    </>
  );
};
export default MyJourney;
