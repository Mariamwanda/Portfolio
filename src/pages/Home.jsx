import Contact from "../composants/Contact";
import Education from "../composants/Education";
import Footer from "../composants/Footer";
import Header from "../composants/Header.jsx";
import Apropos from "../composants/Apropos";
import  Navbar  from "../composants/Navbar";
import Projet from "../composants/Projet";

function Home() {
  return (
    <>
      <div className="Home">
        <Navbar />
          <Header />
          <Apropos />
          <Education />
          <Projet/>
          <Contact />
          <Footer />
      </div>
    </>
  );
}

export default Home;
