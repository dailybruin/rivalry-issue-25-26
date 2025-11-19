import { mediaQueries } from '../shared/config';
import styled from 'styled-components';

const Container = styled.div`
    display: none;
    ${mediaQueries.mobile} {
    display: block;
    position: relative;
    width: fit-content; /* or 100%, depending on layout */
    margin: 0 auto;
}
`;
const Quote = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    width: 50%; 
    background-color: rgba(255, 255, 255, 0.6);
    margin: 10% auto;
`;

const Content = styled.h2`
    font-family: "Playfair Display", serif;
    font-size: 12px;
    font-weight: 400;
    text-align: left; 
    width: 80%;
    margin: 5% auto;
    padding: 5% 5% 5% 12%;
`;

const QuoteMark = styled.span`
    font-family: "Playfair Display", serif;
    position: absolute;
    top: 12%;    /* move the quote up/down */
    left: 18%;   /* move the quote left/right */
    font-size: 100px;
    line-height: 0.6;
    color: #548B32;
    font-family: serif;
    font-weight: bold;
    z-index: 2;
    transform: rotate(-17deg);
`;

const QuoteMobile = () => { 
    const quoteContent = "Commodo officia commodo elit Lorem occaecat ullamco qui et non Lorem enim. Elit commodo pariatur minim proident elit cupidatat velit Lorem labore.";
    return (
        <Container>
        
        <Quote>
            <QuoteMark>“</QuoteMark>
            <Content>{quoteContent}</Content>
        </Quote>
        </Container>
    )
} 
export default QuoteMobile