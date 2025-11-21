// Card Size: 538 x 645
import React from "react";
import styled from "styled-components";
import PullQuote from "./PullQuote";
import clouds_bg from "../images/clouds_bg.png";
import field_bg from "../images/field_bg.png";
import ArticleCard from "./ArticleCard";

// --- Background Wrapper ---
const BackgroundWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 48em) {
    /* let the wrapper shrink to content on small screens */
    width: 100%;
    min-height: auto;
  }
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

  @media (max-width: 48em) {
    /* shrink background to fit smaller screens without cropping important content */
    background-size: contain;
    background-position: center top;
    background-repeat: no-repeat;
  }
`;

// --- Main Content Container ---
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  z-index: 2;
  padding-bottom: 8vh;

  @media (max-width: 48em) {
    width: 90%;
    align-items: center; /* center child rows for better small-screen layout */
    padding-bottom: 12vh;
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
    /* keep side-by-side layout even when window narrows; adjust spacing */
    margin-top: ${({ alignLeft }) => (alignLeft ? "8vh" : "6vh") } !important;
    align-items: ${({ alignLeft }) => (alignLeft ? "flex-start" : "center")};
  }
`;

const CardWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: ${({ align }) => (align === "left" ? "flex-start" : "flex-end")};
  align-items: center;

  @media (max-width: 48em) {
    /* center cards horizontally within their column */
    justify-content: center;
  }
`;

const QuoteWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: ${({ align }) => (align === "left" ? "flex-end" : "flex-start")};
  align-items: center;

  /* make the quote box resize fluidly between a min and max width */
  width: min(38vw, 34rem);
  min-width: 18rem;
  max-width: 34rem;

  @media (max-width: 48em) {
    justify-content: center;
    /* on small screens match card width behavior */
    width: 85%;
    max-width: 40rem;
    min-width: auto;
    flex: 0 0 auto;
  }
`;

/*const PlaceholderCard = styled.div`
  width: 38vw;
  max-width: 34rem;
  aspect-ratio: 538 / 645;
  background: #dcdcdc;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);

  @media (max-width: 48em) {
    width: 85%;
    max-width: 40rem;
  }
`;*/

const CardSizeWrapper = styled.div`
  width: 38vw;
  max-width: 34rem;
  aspect-ratio: 538 / 645;

  @media (max-width: 48em) {
    width: 85%;
    max-width: 40rem;
    aspect-ratio: auto;
  }
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
              <Row key={index} offset={offset} alignLeft={cardAlign === "left"}>
                <CardWrapper align={cardAlign}>
                  {/* <ArticleCard
                    title={item.article_title}
                    byline={item.article_byline}
                    imageUrl={item.article_image}
                    url={item.article_url}
                  /> */}
                  <CardSizeWrapper>
                  <ArticleCard/>
                  </CardSizeWrapper>
                </CardWrapper>
                {index === 2 && (
                  <QuoteWrapper align="right"><PullQuote align="right" /></QuoteWrapper>
                )}
              </Row>
            );
          }

          // Next 3 cards (3-5)
          if (index < 6) {
            const offset = index === 4 ? "half" : "-5vh";
            return (
              <Row key={index} offset={offset} alignLeft={cardAlign === "left"}>
                {index === 5 && (
                  <QuoteWrapper align="left"><PullQuote align="left" /></QuoteWrapper>
                )}
                <CardWrapper align={cardAlign}>
                  {/* <ArticleCard
                    title={item.article_title}
                    byline={item.article_byline}
                    imageUrl={item.article_image}
                    url={item.article_url}
                  /> */}
                  {/* <PlaceholderCard/> */}
                  <CardSizeWrapper>
                  <ArticleCard/>
                  </CardSizeWrapper>
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
                <Row key={index} offset="-15vh" alignLeft={true}>
                  <CardWrapper align="left">
                    <QuoteWrapper align="left" fixed>
                      <PullQuote align="left" />
                    </QuoteWrapper>
                  </CardWrapper>
                  {/* keep the right column present so alignment matches other rows */}
                  <CardWrapper align="right" />
                </Row>
              );
            }

            return (
              <Row key={index} offset={offset}>
                <CardWrapper align={cardAlign}>
                  {/* <ArticleCard
                    title={item.article_title}
                    byline={item.article_byline}
                    imageUrl={item.article_image}
                    url={item.article_url}
                  /> */}
                  {/* <PlaceholderCard/> */}
                  <CardSizeWrapper>
                  <ArticleCard/>
                  </CardSizeWrapper>
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
