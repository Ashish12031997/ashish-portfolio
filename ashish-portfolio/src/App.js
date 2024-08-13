// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
}

function Header() {
  return (
    <header className="App-header">
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        Dynamic and results-driven Lead Software Engineer with over 6 years of experience specializing in backend development using Python and Node.js. Proven track record of leading engineering teams, designing scalable architectures, and implementing robust data ingestion pipelines.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>NodeJS</li>
        <li>TypeScript</li>
        <li>Golang</li>
        <li>PostgreSQL</li>
        <li>SQL Server</li>
        <li>MongoDB</li>
        <li>AWS</li>
        <li>Azure</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <h3>Viral Nation - Lead Software Engineer</h3>
      <p>Aug 2021 - Present</p>
      <ul>
        <li>Lead a team of software engineers ensuring timely and quality completion of goals and tasks.</li>
        <li>Design and develop scalable, low-latency, high-availability web and mobile applications.</li>
        {/* Add more details as needed */}
      </ul>
      <h3>SerpentCS India - Associate Software Developer</h3>
      <p>June 2018 - July 2019</p>
      <ul>
        <li>Design and develop integrated Odoo applications.</li>
        <li>Develop client solutions as part of a cross-functional team.</li>
        {/* Add more details as needed */}
      </ul>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <h3>Centennial College SCARBOROUGH</h3>
      <p>Advance Diploma (Sep 2019 - Apr 2021)</p>
      <h3>Parul Institute of Engineering and Technology INDIA</h3>
      <p>Bachelor of Engineering (Aug 2014 - May 2018)</p>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications">
      <h2>Certifications</h2>
      <ul>
        <li>Google Data Analyst</li>
        <li>Apache Airflow</li>
        <li>Generative AI Professional</li>
      </ul>
    </section>
  );
}

export default App;
