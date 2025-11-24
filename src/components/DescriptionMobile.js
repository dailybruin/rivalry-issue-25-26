import { mediaQueries } from '../shared/config';
import styled from 'styled-components';

const Container = styled.div`
    display: none;

    ${mediaQueries.mobile} {
        display: block;
        background-color: white;
        border: 3px solid black;
        border-radius: 10px; 
        width: 70%;
        margin: 10vh 0;
        padding: 0% 5%;
    }
`;
const DescriptionText = styled.p`
    font-size: 15px;
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    margin-top: 3vh;
`;

const DescriptionMobile = ({ descriptionContent }) => {
    return (
        <Container>
            <DescriptionText>{descriptionContent}</DescriptionText>
        </Container>
    )
}

export default DescriptionMobile;