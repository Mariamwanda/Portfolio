import "./../Css/header.css";

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
