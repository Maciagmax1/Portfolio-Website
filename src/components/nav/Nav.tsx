import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import { FaRegFolder } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";

interface Props {
  inView: boolean;
  isHeaderVisible: boolean;
  isAboutVisible: boolean;
  isExperienceVisible: boolean;
  isPortfolioVisible: boolean;
  isContactVisible: boolean;
  isRecVisible: boolean;
}

const Nav = ({
  inView,
  isHeaderVisible,
  isAboutVisible,
  isExperienceVisible,
  isPortfolioVisible,
  isContactVisible,
  isRecVisible,
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
        <FaRegFolder />
      </a>
      <a
        href="#recommendations"
        className={isRecVisible ? "active" : ""}
        onClick={() => setActiveNav("#recommendations")}
      >
        <FiThumbsUp />
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
