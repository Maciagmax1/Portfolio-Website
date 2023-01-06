import { url } from "inspector";
import "./CTA.css";
import "../../assets/Max_Maciag_Resume.pdf";

const CTA = () => {
  return (
    <div className="CTA">
      <a href="../../assets/Max_Maciag_Resume.pdf" download className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
