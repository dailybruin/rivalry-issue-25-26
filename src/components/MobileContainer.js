import React from 'react';
import { mediaQueries } from '../shared/config';
import styled from 'styled-components';
import CardMobile from './CardMobile';
import QuoteMobile from './QuoteMobile';
import clouds from '../images/clouds.png';
import fieldmarks from '../images/fieldmarks.png';
import grass from '../images/grass.png';




const Container = styled.div`
    display: none;
    ${mediaQueries.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-bottom: 12vh;
        background-image: url(${clouds}), url(${fieldmarks}), url(${grass});
        background-size: cover, cover, cover;
    }
`;
const quote = "Commodo officia commodo elit Lorem occaecat ullamco qui et non Lorem enim. Elit commodo pariatur minim proident elit cupidatat velit Lorem labore.";
const headline = "Headline Goes Here! Here are some more words until we reach the 82 character limit";
const byline = "By this person, more people and maybe even more";
const MobileContainer = () => {
    const quoteContent = quote;
    const headlineContent = headline;
    const bylineContent = byline;
    const containerContent = [
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "quote",
            "quote": quote
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "quote",
            "quote": quote
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "quote",
            "quote": quote
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
        {
            "type": "article",
            "headline": headline,
            "byline": byline
        },
    ];

    return (
        <Container>
                {containerContent.map((content, i) => (
                    <React.Fragment key={i}>
                        {content.type === "article" ? (
                            <CardMobile headlineContent={headlineContent} bylineContent={bylineContent} />
                        ) : (
                            <QuoteMobile quoteContent={quoteContent} />
                        )}
                    </React.Fragment>
                ))}
        </Container>
    )
}

export default MobileContainer;