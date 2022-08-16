import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../style/EmailForm.css';

function EmailForm() {
  const form = useRef();
  const [formCompletion, setFormCompletion] = useState({ user_name: '', user_email: '', message: '' });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const { user_name: userName, user_email: userMail, message } = formCompletion;
    const emailValidation = /\S+@\S+\.\S+/;
    const isFormValid = userName.length !== 0
      && emailValidation.test(userMail)
      && message.length !== 0;
    setButtonDisabled(!isFormValid);
  }, [formCompletion]);

  const handleFormChange = ({ target }) => {
    const { value, name } = target;
    setFormCompletion((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nya3qlm', 'template_05c5ceo', form.current, 'HlC75ErAiIeSmr8iT');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="email-form">
      <label htmlFor="user_name" className="form-labels">
        Nome:
        <input
          className="form-inputs"
          type="text"
          name="user_name"
          id="user_name"
          value={formCompletion.user_name}
          onChange={handleFormChange}
        />
      </label>
      <label htmlFor="user_email" className="form-labels">
        Email:
        <input
          className="form-inputs"
          type="email"
          name="user_email"
          id="user_email"
          value={formCompletion.user_email}
          onChange={handleFormChange}
        />
      </label>
      <label htmlFor="message" className="form-labels">
        Mensagem:
        <textarea
          className="form-inputs form-text"
          name="message"
          id="message"
          value={formCompletion.message}
          onChange={handleFormChange}
        />
      </label>
      <input className="form-button" type="submit" disabled={buttonDisabled} value="Enviar" />
    </form>
  );
}

export default EmailForm;
