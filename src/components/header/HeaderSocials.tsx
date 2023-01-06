import "./HeaderSocials.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="HeaderSocials">
      <a href="https://www.linkedin.com/in/max-maciag/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Maciagmax1" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
