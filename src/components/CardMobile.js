import { mediaQueries } from '../shared/config';
import styled from 'styled-components';
import SampleImage from '../images/CardSampleImg.jpg';

const Container = styled.div`
    display: none;

    ${mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 55%;
        margin-top: 12vh;
        border: 1px solid black;
        border-radius: 10px;
        transition: box-shadow 0.2s ease, transform 0.2s ease;
        background-color: white;
        &:hover {
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        &:hover h2 {
            text-decoration: underline;
        }   
    }
`;
const Image = styled.img`
    width: 100%;
    border-bottom: 1px solid black;
    border-radius: 10px 10px 0 0;
`;
const Headline = styled.h2`
    font-family: "Playfair Display", serif;
    font-size: 18px;
    font-weight: bold;
    width: 78%;
    text-align: left;
    margin-bottom: 0;

    &:hover {
        text-decoration: underline;
    }

    &:hover a {
        text-decoration: underline;
    }
`;
const Byline = styled.p`
    font-size: 10px;
    width: 78%;
    text-align: left;
    margin-top: 5px;
    margin-bottom: 15px;
`;

const CardMobile = ({ headlineContent, bylineContent, url}) => {
    return (
        <Container>
            <Image src={SampleImage} alt="Card Image" />
            <Headline><a href={url}>{headlineContent}</a></Headline>
            <Byline>{bylineContent}</Byline>
        </Container>
    )
}

export default CardMobile;