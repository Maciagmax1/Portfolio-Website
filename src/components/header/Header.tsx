import CTA from "./CTA";
import "./Header.css";
import me from "../../assets/me.jpg";

const Header = () => {
  return (
    <header className="Header">
      <div className="container header__container"></div>
      <h5>Hello I'm</h5>
      <h1>Max Maciag</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <div className="me">
        <img src={me} alt="" />
      </div>
    </header>
  );
};

export default Header;
