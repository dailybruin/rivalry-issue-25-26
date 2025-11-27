import React from "react";
import { mediaQueries } from "../shared/config";
import styled from "styled-components";
import DescriptionMobile from "./DescriptionMobile";
import CardMobile from "./CardMobile";
import QuoteMobile from "./QuoteMobile";
import clouds from "../images/clouds.png";
import fieldmarks from "../images/fieldmarks.png";
import grass from "../images/grass.png";

const Container = styled.div`
  display: none;
  ${mediaQueries.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
const Gradient = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, #548b32, #ddf0f6);
`;
const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 12vh;
  background-image: url(${clouds}), url(${fieldmarks}), url(${grass});
  background-size: cover, cover, cover;
`;
const MobileContainer = ({ data }) => {
  if (!data) return null;

  const defaultSequence = [
    "article",
    "article",
    "quote",
    "article",
    "quote",
    "article",
    "article",
    "article",
    "article",
    "quote",
    "article",
    "article",
    "article"
  ];

  const descriptionContent =
    typeof data.description_text === "object" && data.description_text?.text
      ? data.description_text.text
      : data.description_text;
  const articles = [...(data.articles || [])];
  const quotes = [...(data.quotes || [])];
  const sequence = data.sequence && data.sequence.length > 0
    ? data.sequence
    : defaultSequence;
  const containerContent = sequence
    .map((type) => {
      if (type === "article") return articles.shift();
      if (type === "quote") return quotes.shift();
      return null;
    })
    .filter(Boolean);


  return (
    <Container>
      <Gradient>
        <DescriptionMobile descriptionContent={descriptionContent} />
      </Gradient>
      <Field>
        {containerContent.map((content, i) =>
          content.article_title ? (
            <CardMobile
              key={i}
              image={content.article_image}
              headlineContent={content.article_title}
              bylineContent={content.article_byline}
              url={content.url}
            />
          ) : (
            <QuoteMobile
              key={i}
              quoteContent={
                content.text ||
                content.quote_text?.text ||
                content.quote_text ||
                ""
              }
            />
          )
        )}
      </Field>
    </Container>
  );
};

export default MobileContainer;