import { Link } from 'react-router-dom';
import home from '../icons/home.svg';
import code from '../icons/code.svg';
import email from '../icons/email.svg';
import skills from '../icons/skills.svg';
import '../style/Header.css';

function Header() {
  return (
    <header className="header-container">

      <Link to="/">
        <img
          src={home}
          alt="home-icon"
          className="header-icons"
        />
      </Link>

      <Link to="/skills">
        <img
          src={skills}
          alt="skills-icon"
          className="header-icons"
        />
      </Link>

      <Link to="/projects">
        <img
          src={code}
          alt="code-icon"
          className="header-icons"
        />
      </Link>

      <Link to="/contact">
        <img
          src={email}
          alt="contact-icon"
          className="header-icons"
        />
      </Link>

    </header>
  );
}

export default Header;
