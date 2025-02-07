//Projects.jsx, här får man del av projekten jag har tagit del av och skapat själv men även en länk till github
import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import HassanCard from "../components/HassanCard";
import Solaris from "../img/Solaris.png";
import Bokhandel from "../img/Bokhandel.png";
import Restaurang from "../img/Restaurang.png";
import "../componentsstyling/Projects.css";

function Projects() {
  const dispatch = useDispatch();
  const likeCount = useSelector((state) => state.like.value);

  return (
    <section className="projects-page">
      <header>
        <h2>Mina projekt</h2>
      </header>
{/* Container för korten - flexlayout i Projects.css */}
      <div className="projects-container">
        <article className="project-card">
          <HassanCard
            imageSrc={Solaris}
            title="Solaris"
            description={
              <>
                <p>Ett projekt som visar solsystemet men som även ger information om de planeterna som finns i vårt solsystemet</p>
                <p>
                  <a
                    href="https://github.com/Hassecodes/Solar-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to Solaris project on GitHub"
                  >
                    Se projektet på GitHub
                  </a>
                </p>
              </>
            }
          />
        </article>

        <article className="project-card">
          <HassanCard
            imageSrc={Bokhandel}
            title="Bokhandel"
            description={
              <>
                <p>Ett projekt som skapades av mig och några i klassen där vi skulle göra en bokhandelshemsida åt en kund.</p>
                <p>
                  <a
                    href="https://github.com/Jonas-Eklof/Grupp-4-Examinationsuppgift"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to Bokhandel project on GitHub"
                  >
                    Se projektet på GitHub
                  </a>
                </p>
              </>
            }
          />
        </article>

        <article className="project-card">
          <HassanCard
            imageSrc={Restaurang}
            title="Restaurang"
            description={
              <>
                <p>Ett projekt som skapades av mig och några i klassen där vi skulle skapa en mobilanpassas Restaurang sida åt en kund.</p>
                <p>
                  <a
                    href="https://github.com/Martensven/restaurang"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Link to Restaurang project on GitHub"
                  >
                    Se projektet på GitHub
                  </a>
                </p>
              </>
            }
          />
        </article>
      </div>
    </section>
  );
}

export default Projects;