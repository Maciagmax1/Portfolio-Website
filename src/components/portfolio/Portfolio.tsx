import "./Portfolio.css";
import isalloVid from "../../assets/IsalloRunthrough.mp4";
import qwikFlixVid from "../../assets/QwikFlixRunthrough.mp4";
import { useState } from "react";

const Portfolio = () => {
  const [src1, setSrc1] = useState(isalloVid);
  const [src2, setSrc2] = useState(qwikFlixVid);

  return (
    <section className="Portfolio" id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <h3>QwikFlix</h3>
          <p>
            QwikFlix is an easy to use movie database similar to IMDB. The user
            can search for movies using the live search bar, search for movies
            using filters, and add movies to their watch list. The goal of the
            project was to make a clean intuitive interface with features found
            in modern websites.
          </p>
          <div className="btn-container__portfolio">
            <a
              href="https://github.com/Maciagmax1/react-api-project-2.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="http://QwikFlix-Demo-Project.surge.sh"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
          <div className="project__vid-container">
            <video
              className="video"
              src={src2}
              width="100% auto"
              autoPlay
              muted
              loop
            />
          </div>
        </article>
        <article className="portfolio__item">
          <h3>Isallo</h3>
          <p>
            Isallo is a virtual journal that helps users track their emotional
            trends over time. By evaluating our feelings and experiences, we can
            better understand ourselves and the world around us. In order to
            gain a better understanding of ourselves the user can see a visual
            representation of the data that they log to evaluate how they are
            feeling over time. The user will be able to revisit each individual
            submission with greater detail. Isallo also offers additional
            resources for its users to further their growth in emotional
            intelligence.
          </p>
          <div className="btn-container__portfolio">
            <a
              href="https://github.com/zakir17/isallo-frontend.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://isallo.web.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
          <div className="project__vid-container">
            <video
              className="video"
              src={src1}
              width="100% auto"
              autoPlay
              muted
              loop
            />
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
