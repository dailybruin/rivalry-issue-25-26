// Card Size: 538 x 645
import React from "react";
import styled from "styled-components";
import PullQuote from "./PullQuote";
import clouds_bg from "../images/clouds_bg.png";
import field_bg from "../images/field_bg.png";

// --- Background Wrapper ---
const BackgroundWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

// --- Each Background Layer ---
const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: ${(props) => props.z || 0};
  opacity: ${(props) => props.opacity || 1};
`;

// --- Main Content Container ---
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  z-index: 2;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 4vw;
  width: 100%;
  margin-top: ${({ offset }) => {
    if (offset === "half") return "calc(-38vw * 645 / 538 / 2)";
    return offset || "8vh";
  }};

  @media (max-width: 48em) {
    flex-direction: column;
    margin-top: 6vh;
  }
`;

const CardWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
`;

const QuoteWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: ${({ align }) => (align === "left" ? "flex-end" : "flex-start")};
  align-items: center;

  @media (max-width: 48em) {
    justify-content: center;
  }
`;

const PlaceholderCard = styled.div`
  width: 38vw;
  max-width: 34rem;
  aspect-ratio: 538 / 645;
  background: #dcdcdc;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

const ArticleGrid = ({ articles = [] }) => {
  const rows = articles.length ? articles : Array.from({ length: 11 });

  return (
    <BackgroundWrapper>
      {/* Background layers */}
      <BackgroundImage src={field_bg} z={0} />
      <BackgroundImage src={clouds_bg} z={1} />

      {/* Main content */}
      <Container>
        {rows.map((item, index) => {
          const isEven = index % 2 === 0;
          const cardAlign = isEven ? "left" : "right";

          // First 3 cards (0-2)
          if (index < 3) {
            const offset = index === 0 ? "5vh" : index === 1 ? "half" : "-3vh";
            return (
              <Row key={index} offset={offset}>
                <CardWrapper align={cardAlign}>
                  <PlaceholderCard />
                </CardWrapper>
                {index === 2 && (
                  <QuoteWrapper align="right"><PullQuote /></QuoteWrapper>
                )}
              </Row>
            );
          }

          // Next 3 cards (3-5)
          if (index < 6) {
            const offset = index === 4 ? "half" : "-5vh";
            return (
              <Row key={index} offset={offset}>
                {index === 5 && (
                  <QuoteWrapper align="left"><PullQuote /></QuoteWrapper>
                )}
                <CardWrapper align={cardAlign}>
                  <PlaceholderCard />
                </CardWrapper>
              </Row>
            );
          }

          // Last 5 cards (6-10)
          if (index < 11) {
            let offset;
            if (index === 6) offset = "-4vh";
            else if (index === 8) offset = "-8vh";
            else offset = "half";

            if (index === 10) {
              return (
                <Row key={index} offset="-15vh" style={{ justifyContent: "flex-start" }}>
                  <QuoteWrapper align="left" style={{ flex: "0 0 auto", width: "min(38vw, 34rem)" }}>
                    <PullQuote />
                  </QuoteWrapper>
                </Row>
              );
            }

            return (
              <Row key={index} offset={offset}>
                <CardWrapper align={cardAlign}>
                  <PlaceholderCard />
                </CardWrapper>
              </Row>
            );
          }

          return null;
        })}
      </Container>
    </BackgroundWrapper>
  );
};

export default ArticleGrid;
