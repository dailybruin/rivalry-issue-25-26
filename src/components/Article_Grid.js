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
    margin-top: ${({ alignLeft }) => (alignLeft ? "8vh" : "6vh")} !important;
    align-items: ${({ alignLeft }) => (alignLeft ? "flex-start" : "center")};
  }
`;

const CardWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-start" : "flex-end"};
  align-items: center;

  @media (max-width: 48em) {
    /* center cards horizontally within their column */
    justify-content: center;
  }
`;

const QuoteWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: ${({ align }) =>
    align === "left" ? "flex-end" : "flex-start"};
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

const ArticleGrid = ({ articles = [], quotes = [] }) => {
  const isValidQuote = (quote) => {
    if (!quote) return false;
    if (typeof quote === "string") return quote.trim().length > 0;
    if (typeof quote === "object" && quote?.text)
      return typeof quote.text === "string" && quote.text.trim().length > 0;
    return false;
  };

  const quotePositions = {
    2: { quoteIndex: 0, align: "right", offset: "-15vh", quoteOnly: false },
    5: { quoteIndex: 1, align: "left", offset: "-15vh", quoteOnly: true },
    10: { quoteIndex: 2, align: "left", offset: "-15vh", quoteOnly: true },
  };

  const maxArticleIndex = Math.max(
    articles.length - 1,
    ...Object.keys(quotePositions)
      .map(Number)
      .filter((idx) => quotePositions[idx].quoteOnly)
  );
  const totalRows = Math.max(11, maxArticleIndex + 1);

  const rows = Array.from(
    { length: totalRows },
    (_, index) => articles[index] || null
  );

  const getOffset = (index) => {
    if (index === 0) return "5vh";
    if (index === 1) return "half";
    if (index === 4) return "half";
    if (index === 6) return "-10vh";
    if (index === 8) return "-25vh";
    if (quotePositions[index]) return quotePositions[index].offset;
    return "half";
  };

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
          const quoteConfig = quotePositions[index];
          const hasQuote =
            quoteConfig && isValidQuote(quotes[quoteConfig.quoteIndex]);
          const hasArticle = !!item;
          const isQuoteOnly = quoteConfig?.quoteOnly && !hasArticle;

          if (!hasArticle && !hasQuote) return null;

          if (isQuoteOnly && hasQuote) {
            return (
              <Row
                key={`quote-${index}`}
                offset={quoteConfig.offset}
                alignLeft={quoteConfig.align === "left"}
              >
                <CardWrapper align={quoteConfig.align}>
                  <QuoteWrapper align={quoteConfig.align}>
                    <PullQuote
                      text={quotes[quoteConfig.quoteIndex]}
                      align={quoteConfig.align}
                    />
                  </QuoteWrapper>
                </CardWrapper>
                <CardWrapper
                  align={quoteConfig.align === "left" ? "right" : "left"}
                />
              </Row>
            );
          }

          if (hasArticle) {
            const offset = getOffset(index);
            return (
              <Row
                key={`article-${index}`}
                offset={offset}
                alignLeft={cardAlign === "left"}
              >
                {hasQuote && quoteConfig.align === "left" && (
                  <QuoteWrapper align="left">
                    <PullQuote
                      text={quotes[quoteConfig.quoteIndex]}
                      align="left"
                    />
                  </QuoteWrapper>
                )}

                <CardWrapper align={cardAlign}>
                  <ArticleCard
                    title={item.article_title}
                    byline={item.article_byline}
                    imageUrl={item.article_image}
                    url={item.article_url}
                  />
                </CardWrapper>

                {hasQuote && quoteConfig.align === "right" && (
                  <QuoteWrapper align="right">
                    <PullQuote
                      text={quotes[quoteConfig.quoteIndex]}
                      align="right"
                    />
                  </QuoteWrapper>
                )}
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
