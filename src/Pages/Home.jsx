import React from "react";
import styled from "styled-components/macro";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <Wrapper>
      <Navigation />
      <h1>Charles Cantin - Photographe</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;

  h1 {
    z-index: 1;
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

export default Home;
