import "./../Css/header.css";
import MariamCv from "./../assets/MariamCv.pdf";

export default function Header() {

  return (
    <div className="App">
      <header className="header">
        <div className="Nom">
          <h1>Salut,</h1>
          <p>
            {" "}
            Je suis Miss <span>Wandaogo</span>
            <br />
            <span>D</span>eveloppeuse <span>W</span>eb
          </p>
          <a href={MariamCv}  target="_blank" rel="noopener noreferrer">
            <button>
              <i className="fa fa-eye" style={{ color: "aqua" }}></i>{" "}
              Imprimer Cv
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
