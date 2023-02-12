import "./CTA.css";
import resume from "../../assets/Max_Maciag_Resume.pdf";
const CTA = () => {
  return (
    <div className="CTA">
      <a href={resume} target="_blank" className="btn">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
