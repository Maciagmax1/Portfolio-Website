import CTA from "./CTA";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <div className="container header__container"></div>
      <h5>Hello I'm</h5>
      <h1>Max Maciag</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
    </header>
  );
};

export default Header;
