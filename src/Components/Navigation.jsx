import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          ACCUEIL
        </Link>
        <Link
          to="/galerie"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          GALERIE
        </Link>
        <Link
          to="/tarifs-et-prestations"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          TARIFS ET PRESTATIONS
        </Link>
        <Link
          to="contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          CONTACT
        </Link>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Nav = styled.nav`
  margin-top: 20px;

  a {
    text-decoration: none;
    color: white;
    margin-left: 25px;
    font-family: "Times New Roman", Times, serif;
    font-size: 20px;
    font-weight: bold;
  }

  .nav-active {
    border-radius: 100%;
    border: 5px solid #ff9900;
  }
`;

export default Navigation;
