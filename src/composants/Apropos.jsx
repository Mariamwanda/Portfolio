import imd from "./../assets/portfolio.webp";
import "./../Css/apropos.css";
import { Link } from "react-router-dom";

function Apropos() {
  return (
    <>
      <div className="Apropos">
        <section id="about">
          <div className="apropos-img">
            <div className="single-about-img">
              <img src={imd} alt="profile_image" />
            </div>
          </div>
          <div className="container section-heading text-center">
            <h1>
              <span>Apropos</span> de Moi...
            </h1>
          </div>
          <div className="apropo-text">
            <div className="about-content">
              <div className="row">
                <div className="col-sm-6">
                  <div className="single-about-txt">
                    <h3>deve</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maiores numquam ea esse asperiores vel id pariatur. Hic
                      tempora itaque non labore unde autem odit voluptas facere!
                      Laboriosam officiis cupiditate autem. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Facilis dolores
                      odit nemo voluptates officia beatae tenetur saepe eligendi
                      ipsum magnam! Sequi, iste quis enim eius laudantium neque
                      doloribus! Repellat, vel.
                    </p>
                  </div>
                </div>
                <div className="about-list-icon">
                  <ul>
                    <li>
                      <Link to="">
                        <i className="fa-brands fa-whatsapp"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa-brands fa-telegram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fa-brands fa-google"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
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
