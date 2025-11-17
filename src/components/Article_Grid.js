// Card Size: 538 x 645

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15vw;
  margin: 30vw auto;
  margin-top: 10em;
  margin-bottom: 10em;
  width: 50%;

  @media (max-width: 768px) {
    width: 70%;
    gap: 10vw;
  }
`;

const RightItem = styled.div`
  align-self: flex-end;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const LeftItem = styled.div`
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const PlaceholderCard = styled.div`
  width: 538px;
  height: 645px;
  background: #dcdcdc;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const ArticleGrid = ({ articles = [] }) => {
  return (
    <Container>
      {articles.map((_, index) => {
        const Wrapper = index % 2 === 0 ? LeftItem : RightItem;

        return (
          <Wrapper key={index}>
            <PlaceholderCard />
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default ArticleGrid;
