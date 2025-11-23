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
    font-size: 25px;
    font-weight: 400;
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
          Amet ex exercitation et eu reprehenderit. Ut duis occaecat sunt veniam eu. Magna qui sit aliqua et officia adipisicing cupidatat. Aute fugiat nisi labore aliquip commodo do. Consectetur laboris excepteur nisi et eiusmod

consequat ea aliquip ipsum do. Nisi consequat sit cillum aliqua labore ipsum ipsum. Reprehenderit irure mollit qui consectetur ut officia. Nulla commodo non et cillum sint. Tempor fugiat pariatur ad Lorem et consectetur

ex duis cillum. Dolore et nisi occaecat enim labore exercitation ex labore elit tempor. Consequat culpa in esse proident deserunt. Id commodo duis laboris fugiat enim nulla ut irure ea voluptate. non sit velit
        </p>
      </Container>
    </Gradient>
  );
};

export default DescriptionDesktop;