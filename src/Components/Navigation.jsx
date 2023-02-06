import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <Wrapper>
      <Nav>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
              <Link
                  to="/"
                  className={(nav) => (nav.isActive ? "nav-active" : "")}
                >
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
              </ul>
            </div>
          </div>
        </nav>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  
  @media screen and (max-width: 990px) {
    left: 0;
    transform: translateX(0);
    width: auto;

    .show {
      margin-top: 10px;
    }
    ul > a {
      padding-bottom: 10px;
    }
  }

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

  button {
    background: white;
  }

  .nav-active {
    border-radius: 100%;
    border: 5px solid #ff9900;
  }

  
`;

export default Navigation;
