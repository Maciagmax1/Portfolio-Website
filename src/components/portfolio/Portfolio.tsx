import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="Portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>QwikFlix</h3>
          <a href="https://github.com" className="btn">
            Github
          </a>
          <a
            href="http://QwikFlix-Demo-Project.surge.sh"
            className="btn btn-primary"
            target="_blank"
          >
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
