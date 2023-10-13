import classNames from "classnames";
import useSticky from "./useSticky";
import "./../Css/header.css";

export default function Header() {
  const { sticky, stickyRef } = useSticky();
  return (
    <div className="App">
      <nav ref={stickyRef} className={classNames("nav flex", { sticky })}>
        <ul>
          <li>
            <a href="">Accueil</a>
          </li>
          <li>
            <a href="">A propos</a>
          </li>
          <li>
            <a href="">Compétences & Experience</a>
          </li>
          <li>
            <a href="#Contact">Contact-Moi</a>
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
      <header className="header">
        <div className="Nom">
          <h1>Salut,</h1>
          <p>
            {" "}
            Je suis Miss <span>Wandaogo</span>
            <br />
            <span>D</span>eveloppeuse <span>W</span>eb
          </p>
          <a href="/img/twitter.png" download>
            <button>
              <i className="fa fa-download" style={{ color: "aqua" }}></i>{" "}
              Telecharger Cv
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
