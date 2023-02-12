import "./Recommendations.css";

const Recommendations = () => {
  return (
    <section className="Recommendations" id="recommendations">
      <h5>My Impact</h5>
      <h2>Recommendations</h2>
      <div className="container recommendations__container">
        <div className="recommendations__content">
          <div className="recommendations__cards">
            <article className="recommendations__card">
              <h5>Mitch Cuckovich</h5>
              <small>Instructor at Grand Circus</small>
              <p>
                "Max has a natural talent for coding and a strong understanding
                of programming concepts. He consistently demonstrates a quick
                grasp of new material and is able to apply it to real-world
                projects in a creative and innovative way. He has a strong work
                ethic and is highly motivated to succeed, always going above and
                beyond what is expected in order to produce the best results."
              </p>
            </article>
            <article className="recommendations__card">
              <h5>William Westley</h5>
              <small>Lead Program Manager at Grand Circus</small>
              <p>
                "Max was an exceptional student and went above and beyond
                everything asked of him. In addition to performing very strongly
                academically, Max consistently exceeded expectations on group
                projects and received very positive feedback from his teammates.
                Max’s final project and demo was particularly impressive and
                memorable."
              </p>
            </article>
            <article className="recommendations__card">
              <h5>James Devine</h5>
              <small>Instructor at Grand Circus</small>
              <p>
                "Max had a great attitude throughout the whole boot camp and
                took on a leadership role during the collaborative segments of
                the boot camp. Max was able to obtain the knowledge we gave in
                an efficient and lasting manor. He was punctual and professional
                to both the instructors and his peers. Academically Max
                graduated top of his class with perfect scores."
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
