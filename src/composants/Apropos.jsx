import imd from "./../assets/portfolio.webp";
import "./../Css/apropos.css";
import { Link } from "react-router-dom";

function Apropos() {
  return (
    <>
      <div className="Apropos">
        <section id="about">
          <div className="apropos-img">
            <img src={imd} alt="profile_image" />
          </div>
          <h1>
            <span>Apropos</span> de Moi...
          </h1>
          <div className="apropo-text">
            <div className="about-content">
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-about-txt">
                    <h3>Developpeuse <span>Front-end Javascript</span></h3>
                    <p>
                      Je suis
                    </p>
                    <div>
                      <i className="fa-brands fa-react"></i>

                      <h2>langage</h2>
                    </div>
                  </div>
                </div>
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <Link to="https://wa.me/0575530518">
                        <i className="fa-brands fa-whatsapp"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://t.me/0575530518">
                        <i className="fa-brands fa-telegram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://gmail.com/mariamwandaogo7@gmail.com">
                        <i className="fa-brands fa-google"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://github.com/Mariamwanda">
                        <i className="fab fa-github"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Apropos;
