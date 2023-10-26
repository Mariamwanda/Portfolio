import "./../Css/contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <div id="Contact">
        <div>
          <h2 style={{ marginLeft: "20px" }}>Contact Moi</h2>
        </div>
        <div className="container-fluid" style={{ marginLeft: "12vw" }}>
          <div className="column">
            <form style={{ width: "100%" }}>
              <label htmlFor="fname">Nom</label>
              <input type="text" id="fname" name="nom" placeholder="Nom.." />
              <label htmlFor="lname">Prenom</label>
              <input
                type="text"
                id="lname"
                name="prenom"
                placeholder="Prenom.."
              />
              <div className="relative">
                <label htmlFor="pays">Pays</label>
                <select className="...">
                  <option>Indiana</option>
                  <option>Michigan</option>
                  <option>Ohio</option>
                </select>
              </div>
              <label htmlFor="subject">Object</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="ecrire.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Envoyer" />
            </form>
          </div>
          <div className="col-md-offset-1 col-md-5 col-sm-6 texte">
            <div className="single-contact-box" style={{ width: "100%" }}>
              <div className="contact-adress">
                <div className="contact-add-head">
                  <h3>Mariam Wandaogo</h3>
                  <p>Developpeuse Web</p>
                </div>
                <div className="contact-add-info">
                  <div className="single-contact-add-info">
                    <h3>Téléphone</h3>
                    <p>0575530518</p>
                  </div>
                  <div className="single-contact-add-info">
                    <h3>email</h3>
                    <p>mariamwandaogo7@gmail.com</p>
                  </div>
                  <div className="single-contact-add-info">
                    <h3>Ville</h3>
                    <p>Abidjan</p>
                  </div>
                </div>
              </div>
              <div className="hm-foot-icon">
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
      </div>
    </>
  );
}

export default Contact;
