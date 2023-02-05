import React from 'react';
import styled from 'styled-components/macro';

const Home = () => {
  return (
    <Wrapper>
      <img src="./img/background-home.jpg" alt="backgroundImage" />
      <h1>Charles Cantin - Photographe</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div `

position: relative;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    filter : brightness(30%);
  }
  h1 {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    color: white;
    font-family: 'DancingScript';
    font-size: 50px;
  }
`

export default Home;