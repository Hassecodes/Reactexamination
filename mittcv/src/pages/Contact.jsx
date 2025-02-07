//kontaktsidan där användaren kan fylla i formulär för att höra av sig till mig

import React, { useState } from "react";
import "../componentsstyling/Contact.css";

function Contact() {
  // Hanterar alla inputfält i ett objekt
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Visar en "Tack!" ruta när formuläret skickats
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Uppdaterar state med fältnamnet och värdet
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSubmitSuccess(false); // Tar bort "Tack" om man ändrar något igen
  };

  // Vid inskick: kolla att alla fält är fyllda, nollställ fälten och visa "Tack!"
  const handleSubmit = (e) => {
    e.preventDefault(); // Förhindra sidreload

    if (!formData.name || !formData.email || !formData.message) {
      alert("Var snäll och fyll i alla fält innan du skickar!");
      return;
    }

    console.log("Form data:", formData);
    setFormData({ name: "", email: "", message: "" });
    setSubmitSuccess(true);
  };

  return (
    <section className="contact-container">
      <h1>Kontakt</h1>
      <p>Har du några frågor eller vill samarbeta? Fyll i formuläret nedan!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">
          Namn:
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="email">
          E-post:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="message">
          Meddelande:
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Skicka</button>
      </form>

      {submitSuccess && (
        <div className="success-message">
          Tack för ditt meddelande! Jag återkommer så snart som möjligt.
        </div>
      )}
    </section>
  );
}

export default Contact;