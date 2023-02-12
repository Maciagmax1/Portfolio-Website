import "./About.css";

import { FaAward } from "react-icons/fa";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { useState } from "react";

const About = () => {
  const [bioInfoFull, setBioInfoFull] = useState(false);
  return (
    <section className="About" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Technical Experience</h5>
              <small>3 Month Bootcamp</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
            <article className="about__card">
              <VscTools className="about__icon" />
              <h5>Job Experience</h5>
              <small>3+ Years Working At Research Laboratory</small>
            </article>
          </div>
          {window.innerWidth <= 550 ? (
            bioInfoFull ? (
              <>
                <p>
                  I trained at Grand Circus to become a Full Stack JavaScript
                  Developer and graduated in September 2022. After graduation I
                  have been seeking to join an ambitious organization where I
                  can further develop my skills. Through the Full Stack
                  JavaScript Bootcamp at Grand Circus, I have gained experience
                  working on group projects utilizing many different
                  technologies. I have past experience following rigid
                  procedures in a laboratory environment, making detail critical
                  decisions, and keeping up with an intense workflow. Familiar
                  with manifesting abstract ideas and goals into tangible
                  solutions and designs. Passionate about starting a new career
                  in tech. Being able to design and develop high end user
                  interfaces as well as exercise my problem-solving skills is my
                  ideal career.
                </p>
                <a
                  className="readMoreOrLess"
                  href="#readless"
                  onClick={() => setBioInfoFull(false)}
                >
                  Read Less
                </a>
              </>
            ) : (
              <>
                <p>
                  I trained at Grand Circus to become a Full Stack JavaScript
                  Developer and graduated in September 2022. After graduation I
                  have been seeking to join an ambitious organization where I
                  can further develop my skills.
                </p>
                <a
                  className="readMoreOrLess"
                  href="#readmore"
                  onClick={() => setBioInfoFull(true)}
                >
                  Read More
                </a>
              </>
            )
          ) : (
            <p>
              I trained at Grand Circus to become a Full Stack JavaScript
              Developer and graduated in September 2022. After graduation I have
              been seeking to join an ambitious organization where I can further
              develop my skills. Through the Full Stack JavaScript Bootcamp at
              Grand Circus, I have gained experience working on group projects
              utilizing many different technologies. I have past experience
              following rigid procedures in a laboratory environment, making
              detail critical decisions, and keeping up with an intense
              workflow. Familiar with manifesting abstract ideas and goals into
              tangible solutions and designs. Passionate about starting a new
              career in tech. Being able to design and develop high end user
              interfaces as well as exercise my problem-solving skills is my
              ideal career.
            </p>
          )}

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
