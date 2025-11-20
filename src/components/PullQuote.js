import React from "react";
import styled from "styled-components";
import quoteMarkImage from "../images/quoteMark.png";


// Outer box (matches the 533x222 Figma box, but responsive)
const PullQuoteWrapper = styled.section`
  position: relative;

  /* outer card ~533 x 222 */
  width: 33.3125rem;
  height: 13.875rem;

  border-radius: 1.25rem;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  /* so it sits nicely in the layout */
  margin: 3vh auto;
`;

const PullQuoteText = styled.p`
  /* inner text frame ~443 x 180 */
  width: 27.6875rem;
  height: 11.25rem;

  margin: 0;

  font-family: "ITC Century Std", "Cormorant Garamond", serif;
  font-size: 1.875rem;   /* 30px */
  line-height: 1.2;      /* tweak this up/down to match Figma line spacing */
  font-weight: 400;
  text-align: left;      /* or center if your Figma text is centered */
`;

// Big green quotation mark in the top-left
const QuoteMarkImage = styled.img`
  position: absolute;
  top: -2rem;
  left: -5rem;

  width: 7rem;      
  height: 7rem;
  object-fit: contain;

  transform: rotate(-13.8deg);

  pointer-events: none;
  user-select: none;
  z-index: 0;        /* ensure it’s behind text if needed */
`;

// 22-word temp text so the box is sized realistically
const TEMP_TEXT =
  "Commodo officia commodo elit Lorem occaecat ullamco qui et non Lorem enim. Elit commodo pariatur minim proident elit cupidatat velit Lorem labore.";

function PullQuote({ text }) {
  const content = text || TEMP_TEXT;

  return (
    <PullQuoteWrapper>
      <QuoteMarkImage src={quoteMarkImage} alt="Quote Mark" />
      <PullQuoteText>{content}</PullQuoteText>
    </PullQuoteWrapper>
  );
}

export default PullQuote;
