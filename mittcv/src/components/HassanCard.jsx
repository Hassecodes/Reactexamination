//Card komponent som tar emot props för att visa bild, titel och beskrivning

import React, { useState } from "react";
import "../componentsstyling/HassanCard.css";

function HassanCard({ imageSrc, title, description }) {
  // Lokal state för gilla-räknare - gäller bara detta kort
  const [likeCount, setLikeCount] = useState(0);

  // Avgör om bilden är en png och ska ha gilla-funktion
  const isPng = imageSrc.toLowerCase().endsWith(".png");

  // Ökar gillningar när man klickar
  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  // Nollställer gillningarna
  const handleReset = () => {
    setLikeCount(0);
  };

  return (
    <div className="card">
      {/* Visar en bild med rundade hörn och en title/description */}
      <img src={imageSrc} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>

      {/* Om bilden är en .png får man gilla-knapp + reset */}
      {isPng && (
        <div className="like-section">
          <p className="like-count">Likes: {likeCount}</p>
          <button className="like-button" onClick={handleLike}>
            Gilla
          </button>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default HassanCard;