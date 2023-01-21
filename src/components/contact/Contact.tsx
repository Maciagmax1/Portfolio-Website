import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <section className="Contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>maciagmax1@gmail.com</h5>
            <a href="mailto:maciagmax1@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin />
            <h4>Linkedin</h4>
            <h5>Max Maciag</h5>
            <a href="https://www.linkedin.com/in/max-maciag/" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
