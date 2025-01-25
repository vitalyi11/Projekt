import React, { useState } from "react";
import "./Kontakt.css";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setIsSubmitted(true);

    setFormData({
      email: "",
      message: "",
    });

  };

  return (
    <div className="kontakt-page">
      <h1>Kontakt</h1>
      {isSubmitted && <p className="success-message">Wiadomość została wysłana!</p>}
      <form className="kontakt-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Adres email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Wpisz swój adres email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Wiadomość:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Wpisz swoją wiadomość"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Prześlij
        </button>
      </form>
    </div>
  );
};

export default Kontakt;