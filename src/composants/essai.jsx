import { useState } from "react";
import "./../Css/essai.css";

function Essai() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEssai = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <button className="toggle-button" onClick={toggleEssai}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </button>
      <ul className="nav-links">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Essai;
