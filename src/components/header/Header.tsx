import CTA from "./CTA";
import "./Header.css";
import me from "../../assets/profilepic.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="Header">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Max Maciag</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
