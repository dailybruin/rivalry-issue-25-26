import { mediaQueries } from '../shared/config';
import styled from 'styled-components';

const Container = styled.div`
    display: none;
    ${mediaQueries.mobile} {
    display: block;
    border: 1px solid black;
    border-radius: 20px;
    position: relative;
    width: 50%;
    margin-top: 18vh;
    margin-bottom: 6vh;
    background-color: rgba(255, 255, 255, 0.6);
}
`;

const Content = styled.h2`
    font-family: "Playfair Display", serif;
    font-size: 12px;
    font-weight: 400;
    text-align: left; 
    width: 80%;
    margin: 5% auto;
`;

const QuoteMark = styled.span`
    font-family: "Playfair Display", serif;
    position: absolute;
    top: 12%;    /* move the quote up/down */
    left: -28px;   /* move the quote left/right */
    font-size: 100px;
    line-height: 0.6;
    color: #548B32;
    font-family: serif;
    font-weight: bold;
    z-index: 2;
    transform: rotate(-17deg);
`;

const QuoteMobile = ({ quoteContent }) => {
    // Handle case where quoteContent might be an object with a text property
    const displayText = typeof quoteContent === 'object' && quoteContent?.text ? quoteContent.text : (quoteContent || '');
    
    return (
        <Container>
            <QuoteMark>"</QuoteMark>
            <Content>{displayText}</Content>
        </Container>
    )
} 
export default QuoteMobile