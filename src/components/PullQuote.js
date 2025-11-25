import React from "react";
import styled from "styled-components";
import quoteMarkImage from "../images/quoteMark.png";


// Outer box (responsive)
const PullQuoteWrapper = styled.section`
  position: relative;

  /* slightly bigger wrapper with fluid scaling */
  width: clamp(20rem, 40vw, 38rem);
  max-width: 38rem;
  height: auto;

  border-radius: 1.25rem;
  border: 1px solid #000;
  background: rgba(255, 255, 255, 0.6);

  display: flex;
  align-items: center;
  justify-content: center;

  /* fluid padding that scales down on small viewports */
  padding: clamp(1rem, 2.5vw, 1.75rem);
  box-sizing: border-box;

  /* so it sits nicely in the layout */
  margin: 3vh auto;

  @media (max-width: 48em) {
    /* when used inside a left-aligned row, allow overriding margin via prop */
    ${(p) =>
      p.align === 'left'
        ? 'margin-left: 0; margin-right: auto; margin-top: 3vh;'
        : ''}
  }
`;

const PullQuoteText = styled.p`
  margin: 0;
  width: 100%;

  font-family: "ITC Century Std", "Cormorant Garamond", serif;
  /* responsive font size: scales down smoothly between 16px and 30px */
  font-size: clamp(1rem, 3.2vw, 1.875rem);
  line-height: 1.25;
  font-weight: 400;
  text-align: left;
`;

// Big green quotation mark in the top-left
const QuoteMarkImage = styled.img`
    position: absolute;

  /* fixed offsets relative to the box, not the viewport */
  top: -1.1rem;   /* negative = a bit above the border */
  left: -1.4rem;  /* negative = a bit outside to the left */

  width: 3.5rem;  /* fixed size for consistency */
  height: auto;
  display: block;
  object-fit: contain;
  flex-shrink: 0;
  transform: rotate(-13.8deg);
  pointer-events: none;
  user-select: none;
  z-index: 0;

  /* small tweak for very narrow screens only */
  @media (max-width: 48em) {
    top: -0.8rem;
    left: -1rem;
    width: 3rem;
  }
`;

// 22-word temp text so the box is sized realistically
const TEMP_TEXT =
  "Commodo officia commodo elit Lorem occaecat ullamco qui et non Lorem enim. Elit commodo pariatur minim proident elit cupidatat velit Lorem labore.";

function PullQuote({ text, align }) {
  // Handle case where text might be an object with a text property
  let content = TEMP_TEXT;
  if (text) {
    if (typeof text === 'object' && text.text) {
      content = text.text;
    } else if (typeof text === 'string') {
      content = text;
    }
  }

  return (
    <PullQuoteWrapper align={align}>
      <QuoteMarkImage src={quoteMarkImage} alt="Quote Mark" />
      <PullQuoteText>{content}</PullQuoteText>
    </PullQuoteWrapper>
  );
}

export default PullQuote;