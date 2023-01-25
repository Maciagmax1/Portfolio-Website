import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <a href="#" className="footer__logo">
        Max
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/max-maciag/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/Maciagmax1" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
