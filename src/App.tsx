import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import { InView, useInView } from "react-intersection-observer";
import { useState } from "react";
import Recommendations from "./components/recommendations/Recommendations";

function App() {
  const { ref, inView } = useInView({ threshold: 1.0 });

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isRecVisible, setIsRecVisible] = useState(false);

  return (
    <div className="App">
      <InView
        as="div"
        className={isHeaderVisible ? "mainElement" : "mainElement noncurrent"}
        onChange={(inView, entry) => setIsHeaderVisible(entry.isIntersecting)}
        threshold={0.75}
      >
        <Header />
      </InView>
      <Nav
        inView={inView}
        isHeaderVisible={isHeaderVisible}
        isAboutVisible={isAboutVisible}
        isExperienceVisible={isExperienceVisible}
        isPortfolioVisible={isPortfolioVisible}
        isContactVisible={isContactVisible}
        isRecVisible={isRecVisible}
      />
      <InView
        as="div"
        className={isAboutVisible ? "mainElement" : "mainElement noncurrent"}
        onChange={(inView, entry) => setIsAboutVisible(entry.isIntersecting)}
        threshold={0.45}
        root={null}
        rootMargin={window.innerWidth >= 1024 ? "-100px" : ""}
      >
        <About />
      </InView>
      <InView
        as="div"
        className={
          isExperienceVisible ? "mainElement" : "mainElement noncurrent"
        }
        onChange={(inView, entry) =>
          setIsExperienceVisible(entry.isIntersecting)
        }
        root={null}
        rootMargin={window.innerWidth >= 1024 ? "-160px" : ""}
        threshold={0.4}
      >
        <Experience />
      </InView>
      <InView
        as="div"
        className={
          isPortfolioVisible ? "mainElement" : "mainElement noncurrent"
        }
        onChange={(inView, entry) =>
          setIsPortfolioVisible(entry.isIntersecting)
        }
        threshold={0.12}
      >
        <Portfolio />
      </InView>
      <InView
        as="div"
        className={isRecVisible ? "mainElement" : "mainElement noncurrent"}
        onChange={(inView, entry) => setIsRecVisible(entry.isIntersecting)}
        threshold={0.3}
        root={null}
        rootMargin={window.innerWidth >= 1024 ? "-150px" : ""}
      >
        <Recommendations />
      </InView>
      <InView
        as="div"
        className={isContactVisible ? "mainElement" : "mainElement noncurrent"}
        onChange={(inView, entry) => setIsContactVisible(entry.isIntersecting)}
        threshold={0.55}
        root={null}
        rootMargin={window.innerWidth >= 1024 ? "-200px" : ""}
      >
        <Contact />
      </InView>
      <Footer />
    </div>
  );
}

export default App;
