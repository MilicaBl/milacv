import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer>
      <div id="contact" className="footer-content">
        <span>
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:+46761364241">0761364241</a>
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:milab.code@gmail.com">milab.code@gmail.com</a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/milica-blagojevic-a726ab260/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
