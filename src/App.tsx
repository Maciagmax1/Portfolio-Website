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

function App() {
  const { ref, inView } = useInView({ threshold: 1.0 });

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <div className="App">
      <InView
        as="div"
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
      />
      <InView
        as="div"
        onChange={(inView, entry) => setIsAboutVisible(entry.isIntersecting)}
        threshold={0.58}
      >
        <About />
      </InView>
      <InView
        as="div"
        onChange={(inView, entry) =>
          setIsExperienceVisible(entry.isIntersecting)
        }
        threshold={0.38}
      >
        <Experience />
      </InView>
      <InView
        as="div"
        onChange={(inView, entry) =>
          setIsPortfolioVisible(entry.isIntersecting)
        }
        threshold={0.12}
      >
        <Portfolio />
      </InView>
      <InView
        as="div"
        onChange={(inView, entry) => setIsContactVisible(entry.isIntersecting)}
        threshold={0.65}
      >
        <Contact />
      </InView>
      <Footer />
    </div>
  );
}

export default App;
