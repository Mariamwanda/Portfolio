import "./../Css/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav
        className="
                py-4 text-white fixed  
                w-full top-0 left-0 "
      >
        <div className="container mx-auto">
          <ul className="ml-8 space-x-12 ">
            <li className="inline-block">
              <a href="/">
                Accueil
              </a>
            </li>
            <li className="inline-block">
              <Link to="" >
                Apropos
              </Link>
            </li>
            <li className="inline-block">
              <a href="">
                  Compétences & Experience
              </a>
            </li>
            <li className="inline-block">
              <Link to="" >
                Projet
              </Link>
            </li>
            <li className="inline-block">
              <Link to="">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
