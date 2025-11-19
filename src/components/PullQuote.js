import React from "react";
import styled from "styled-components";

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
const QuoteMark = styled.span`
  position: absolute;
  top: -4.5rem;
  left: -6.5rem;

  font-family: "ITC Century Std", "Cormorant Garamond", serif;
  font-size: 25rem;           /* ~400px */
  font-weight: 400;
  line-height: 1;
  letter-spacing: -5.25rem;   /* ~-84px */
  color: #548b32;
  transform: rotate(-13.8deg);

  pointer-events: none;
  user-select: none;
`;

// 22-word temp text so the box is sized realistically
const TEMP_TEXT =
  "Commodo officia commodo elit Lorem occaecat ullamco qui et non Lorem enim. Elit commodo pariatur minim proident elit cupidatat velit Lorem labore.";

function PullQuote({ text }) {
  const content = text || TEMP_TEXT;

  return (
    <PullQuoteWrapper>
      <QuoteMark>“</QuoteMark>
      <PullQuoteText>{content}</PullQuoteText>
    </PullQuoteWrapper>
  );
}

export default PullQuote;
