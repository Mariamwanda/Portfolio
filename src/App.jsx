
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Header from "./composants/Header.jsx";
import Home from "./pages/Home.jsx";
import Education from "./composants/Education.jsx";
import Contact from "./composants/Contact.jsx";
import Footer from "./composants/Footer.jsx";
import Apropos from "./composants/Apropos.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
     
        <Routes>
        <Route path="/" element={<Home/> } />
         <Route path="/Header" element={<Header/> } />
         <Route path="/Education" element={<Education/> } />
         <Route path="/Contact" element={<Contact/> } />
         <Route path="/Footer" element={<Footer/> } />
         <Route path="/Apropos" element={<Apropos/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

