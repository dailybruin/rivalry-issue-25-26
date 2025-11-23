import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  width: 75%;
  margin: 5vh;
  padding: 5% 5%;

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    text-align: left;
  }
`;

const Gradient = styled.div`
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, #548B32, #DDF0F6);
`;

const DescriptionDesktop = () => {
  return (
    <Gradient>
      <Container>
        <p>
        </p>
      </Container>
    </Gradient>
  );
};

export default DescriptionDesktop;