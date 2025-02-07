//Första sidan där användaren får en presentation om mig och mina intressen

import React, { useState } from "react";
import "../componentsstyling/Home.css";

// Import av Bild1 en .jpg
import Bild1 from "../img/Bild1.jpg"; 

import HassanCard from "../components/HassanCard";

function Home() {
  // Hanterar "visa/dölj mer info" sektionen
  const [showMore, setShowMore] = useState(false);

  const toggleMoreInfo = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className="home-container">
      <h1>Välkommen till HasseCode!</h1>

      <button onClick={toggleMoreInfo}>
        {showMore ? "Klicka inte på mig!" : "Klicka på mig!"}
      </button>

      {/* Visas endast om showMore = true */}
      {showMore && (
        <div className="more-info">
          {/* Kort som visar min profilbild och en kort beskrivning */}
          <HassanCard
            imageSrc={Bild1}
            title="Hassan Aziz"
            description="Jag är en passionerad 23 åring som brinner för teknik och utveckling. 
            Jag söker nya utmaningar för att lära mig nytt, utmana mina svagheter och utveckla mig själv."
          />

          <div className="about-description">
            <p>
              Jag brinner för programmering och problemlösning fast det inte är min starka sida. 
              Jag valde denna utbildning för att lära mig nya saker och utforska möjligheterna 
              som programmering kan ge. Nedan är några områden som jag tycker är särskilt spännande:
            </p>
            <ul>
              <li>Webbutveckling (frontend &amp; backend)</li>
              <li>Agila arbetsmetoder &amp; teamwork</li>
            </ul>
            <p>
              Utöver teknik tycker jag också om att resa, upptäcka nya kulturer och 
              ägna mig åt fotografering på fritiden.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;