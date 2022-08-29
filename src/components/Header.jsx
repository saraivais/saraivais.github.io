import { Link } from 'react-router-dom';
import home from '../icons/home.svg';
import code from '../icons/code.svg';
import email from '../icons/email.svg';
import skills from '../icons/skills.svg';
import '../style/Header.css';

function Header() {
  return (
    <header className="header-container">

      <Link to="/" className="header-link">
        <img
          src={home}
          alt="home-icon"
          className="header-icons"
        />
        <p className="link-name">Página Inicial</p>
      </Link>

      <Link to="/skills" className="header-link">
        <img
          src={skills}
          alt="skills-icon"
          className="header-icons"
        />
        <p className="link-name">Tecnologias</p>
      </Link>

      <Link to="/projects" className="header-link">
        <img
          src={code}
          alt="code-icon"
          className="header-icons"
        />
        <p className="link-name">Projetos</p>
      </Link>

      <Link to="/contact" className="header-link">
        <img
          src={email}
          alt="contact-icon"
          className="header-icons"
        />
        <p className="link-name">Contato</p>
      </Link>

    </header>
  );
}

export default Header;
