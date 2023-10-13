import "./../Css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <ul>
          <li>
            <Link to="">Accueil</Link>
            <Link to="">A propos</Link>
            <Link to="">Compétences</Link>
            <Link to="">Projets</Link>
            <Link to="">Contact</Link>
          </li>
        </ul>
        <p>
          &copy; 2023 MariamWandaogo & <span>Portfolio</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
