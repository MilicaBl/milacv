import { Link } from "react-scroll";
import "../styles/Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <div className="navList">
        <ul>
          <li>
            <Link to="about" smooth={true} duration={1500}>
              About me
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1500}>
              Selected work
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={1500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="journey" smooth={true} duration={1500}>
              Explore my journey
            </Link>
          </li>
          <li className="contact-btn">
            <Link to="contact" smooth={true} duration={1500}>
              Let's talk
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navigation;
