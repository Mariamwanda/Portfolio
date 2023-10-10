
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Header from "./composants/header.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
     
        <Routes>
        <Route path="/" element={<Home/> } />
         <Route path="/Header" element={<Header/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
