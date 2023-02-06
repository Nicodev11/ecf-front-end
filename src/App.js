import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/bootstrap/bootstrap.min.css.map";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Prices from "./Pages/Prices";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/tarifs-et-prestations" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
