import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./composants/Header.jsx";
import Home from "./pages/Home.jsx";
import Education from "./composants/Education.jsx";
import Contact from "./composants/Contact.jsx";
import Footer from "./composants/Footer.jsx";
import Apropos from "./composants/Apropos.jsx";
import Navbar from "./composants/Navbar.jsx";
import Essai from "./composants/essai.jsx";
import Projet from "./composants/Projet.jsx";
import Competence from "./composants/competence&experienc.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Essai" element={<Essai />} />
          <Route path="/Projet" element={<Projet />} />
          <Route path="/Competence" element={<Competence />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

/*https://cvdesignr.com/p/651ad053e8a59*/
