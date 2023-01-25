import "./About.css";
import aboutMe from "../../assets/about-me.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section className="About" id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 Month Bootcamp</small>
            </article>
            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            enim saepe natus quis sit quam quod a repellendus quisquam
            recusandae doloribus corporis eos, maiores modi sint veniam tempore
            labore totam.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
