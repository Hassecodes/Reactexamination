//Footer komponent som visas på alla sidor

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../componentsstyling/footer.css";

function Footer() {
  // useState-hook för ett litet newsletter-formulär i footern
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Hanterar formulärets inskick när man vill prenumerera
  const handleSubscription = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Var snäll och fyll i en e-postadress.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-row">

          {/* Contact-kolumn: länkar till contact-sidan via React Router */}
          <div className="footer-column">
            <h3 className="footer-title">Contact</h3>
            <Link to="/contact" className="footer-link">
              Kontakta mig
            </Link>
          </div>

          {/* Social-kolumn: länkar till sociala medier */}
          <div className="footer-column">
            <h3 className="footer-title">Social</h3>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Youtube
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Twitter
            </a>
          </div>

          {/* Nyhetsbrevskolumn: visar antingen prenumerationsformulär eller tack-meddelande */}
          <div className="footer-column">
            <h3 className="footer-title">Nyhetsbrev</h3>
            {subscribed ? (
              <p className="subscribed-text">Tack! Du är nu prenumererad.</p>
            ) : (
              <form onSubmit={handleSubscription} className="subscribe-form">
                <input
                  type="email"
                  placeholder="Din e-postadress"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Prenumerera</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;