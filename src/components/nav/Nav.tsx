import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { TfiFolder } from "react-icons/tfi";
import { useEffect, useState } from "react";

interface Props {
  inView: boolean;
  isHeaderVisible: boolean;
  isAboutVisible: boolean;
  isExperienceVisible: boolean;
  isPortfolioVisible: boolean;
  isContactVisible: boolean;
}

const Nav = ({
  inView,
  isHeaderVisible,
  isAboutVisible,
  isExperienceVisible,
  isPortfolioVisible,
  isContactVisible,
}: Props) => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="Nav">
      <a
        href="#"
        className={isHeaderVisible ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={isAboutVisible ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={isExperienceVisible ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={isPortfolioVisible ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <TfiFolder />
      </a>
      <a
        href="#contact"
        className={isContactVisible ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
