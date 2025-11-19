// Card Size: 538 x 645

import React from "react";
import styled from "styled-components";
import PullQuote from "./PullQuote"; // 🔹 add this

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6vh;          /* vertical distance between rows */
  width: 80%;
  margin: 8vh auto;

  @media (max-width: 48em) {
    width: 90%;
    gap: 4vh;
    margin: 6vh auto;
  }
`;

// One row = article + optional quote
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 4vw;
  width: 100%;

  @media (max-width: 48em) {
    flex-direction: column;
    gap: 3vh;
  }
`;

const CardWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: ${props => (props.align === "left" ? "flex-start" : "flex-end")};
`;

const QuoteWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: ${props => (props.align === "left" ? "flex-end" : "flex-start")};
  align-items: center;

  @media (max-width: 48em) {
    justify-content: center;
  }
`;

const PlaceholderCard = styled.div`
  width: 38vw;
  max-width: 34rem;
  aspect-ratio: 538 / 645;  /* keeps the same shape without px height */
  background: #dcdcdc;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

const ArticleGrid = ({ articles = [] }) => {
  return (
    <Container>
      {articles.map((_, index) => {
        const alignLeft = index % 2 === 0;      // even index: card on left, odd: card on right
        const showQuote = index % 2 === 0;      // 🔹 "every other article" – here: 0, 2, 4, ...

        return (
          <Row key={index}>
            {alignLeft ? (
              <>
                {/* card left */}
                <CardWrapper align="left">
                  <PlaceholderCard />
                </CardWrapper>

                {/* quote right, only on every other article */}
                {showQuote ? (
                  <QuoteWrapper align="left">
                    <PullQuote />
                  </QuoteWrapper>
                ) : (
                  <QuoteWrapper align="left" />
                )}
              </>
            ) : (
              <>
                {/* quote left for odd-indexed rows that should have one */}
                {showQuote ? (
                  <QuoteWrapper align="right">
                    <PullQuote />
                  </QuoteWrapper>
                ) : (
                  <QuoteWrapper align="right" />
                )}

                {/* card right */}
                <CardWrapper align="right">
                  <PlaceholderCard />
                </CardWrapper>
              </>
            )}
          </Row>
        );
      })}
    </Container>
  );
};

export default ArticleGrid;
