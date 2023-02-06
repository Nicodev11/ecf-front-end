import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/bootstrap/bootstrap.min.css.map";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Prices from "./Pages/Prices";
import Contact from "./Pages/Contact";
import styled from "styled-components/macro";

const App = () => {
  return (
    <div>
      <Wrapper>
        <img src="./img/background-home.jpg" alt="backgroundImage" />
        <h1>Charles Cantin - Photographe</h1>
      </Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/tarifs-et-prestations" element={<Prices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

const Wrapper = styled.div`
  position: relative;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    filter: brightness(30%);
  }
  h1 {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    color: white;
    font-family: "DancingScript";
    font-size: 50px;
  }
`;

export default App;
