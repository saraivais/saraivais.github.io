import React from 'react';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import githubIcon from '../icons/github.svg';
import linkedinIcon from '../icons/linkedin.svg';
import '../style/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact-box">
        <div className="contact-text">
          <h2 className="contact-title">Entre em contato,</h2>
          <p className="contact-message first-message">se gostou do meu trabalho e quer conversar.</p>
          <p className="contact-message">Pode me alcançar através do formulário ao lado ou por meio das redes sociais abaixo.</p>
          <p className="contact-message">Responderei o mais breve possível.</p>
        </div>
        <EmailForm />
      </div>
      <div className="media-icon-container">
        <a
          rel="noreferrer"
          href="https://github.com/saraivais"
          target="_blank"
        >
          <img className="media-icons" src={githubIcon} alt="github-icon" />
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/isadorasaraiva/"
          target="_blank"
        >
          <img className="media-icons" src={linkedinIcon} alt="github-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
