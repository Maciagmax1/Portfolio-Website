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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus fugiat provident necessitatibus. Voluptate, cupiditate
            repellat eaque ex quod earum. Ab non repudiandae laborum commodi
            atque ipsa voluptatem numquam ipsum dolores.
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
            <video />
          </div>
        </article>
        <article className="portfolio__item">
          <h3>Isallo</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            tenetur voluptates, labore placeat iusto distinctio iure odio cum
            fuga alias error quibusdam aspernatur blanditiis corporis,
            perspiciatis facere eum possimus voluptate.
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
            <video />
          </div>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
