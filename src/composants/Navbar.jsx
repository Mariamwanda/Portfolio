import classNames from "classnames";
import useSticky from "./useSticky";
import "./../Css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const { sticky, stickyRef } = useSticky();
  return (
    <>
      <nav ref={stickyRef} className={classNames("nav flex", { sticky })}>
        <button className="toggle-button">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
        <ul className="nav-links">
          <li>
            <Link to="#">Accueil</Link>
          </li>
          <li>
            <Link to="#">Apropos</Link>
          </li>
          <li>
            <Link to="#">Experience & Compétence</Link>
          </li>
          <li>
            <Link to="#">Contact-Moi</Link>
          </li>
        </ul>
      </nav>
      {sticky && (
        <div
          style={{
            height: `${stickyRef.current?.clientHeight}px`,
          }}
        />
      )}
    </>
  );
}

export default Navbar;
