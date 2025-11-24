import React from 'react';
import { mediaQueries } from '../shared/config';
import styled from 'styled-components';
import DescriptionMobile from './DescriptionMobile';
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
    }
`;
const Gradient = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background: linear-gradient(to bottom, #548B32, #DDF0F6);
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
const description1 = "Amet ex exercitation et eu reprehenderit. Ut duis occaecat sunt veniam eu. Magna qui sit aliqua et officia adipisicing cupidatat. Aute fugiat nisi labore aliquip commodo do. Consectetur laboris excepteur nisi et eiusmod";
const description2 = "consequat ea aliquip ipsum do. Nisi consequat sit cillum aliqua labore ipsum ipsum. Reprehenderit irure mollit qui consectetur ut officia. Nulla commodo non et cillum sint. Tempor fugiat pariatur ad Lorem et consectetur";
const description3 = "ex duis cillum. Dolore et nisi occaecat enim labore exercitation ex labore elit tempor. Consequat culpa in esse proident deserunt. Id commodo duis laboris fugiat enim nulla ut irure ea voluptate. non sit velit";
const quote = "Commodo officia commodo elit Lorem occaecat ullamco qui et non Lorem enim. Elit commodo pariatur minim proident elit cupidatat velit Lorem labore.";
const headline = "Headline Goes Here! Here are some more words until we reach the 82 character limit";
const byline = "By this person, more people and maybe even more";
const MobileContainer = ({data}) => {
    // const description1Content = description1;
    // const description2Content = description2;
    // const description3Content = description3;
    const descriptionContent = data.description_text;
    // const quoteContent = quote;
    const articles = [...(data.articles || [])];
    const quotes = [...(data.quotes || [])];
    // const headlineContent = headline;
    // const bylineContent = byline;
    const containerContent = (data.sequence || []).map(type => {
        if (type === "article") return articles.shift();
        if (type === "quote") return quotes.shift();
        return null;
    }).filter(Boolean);
    // const containerContent = [
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "quote",
    //         "quote": quote
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "quote",
    //         "quote": quote
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "quote",
    //         "quote": quote
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    //     {
    //         "type": "article",
    //         "headline": headline,
    //         "byline": byline
    //     },
    // ];

    return (
        <Container>
            <Gradient>
                <DescriptionMobile descriptionContent={descriptionContent} />
            </Gradient>
            <Field>
                {containerContent.map((content, i) => (
                    content.article_title ? (
                        <CardMobile key={i} headlineContent={content.article_title} bylineContent={content.article_byline} />
                    ) : (
                        <QuoteMobile key={i} quoteContent={content.quote_text} />
                    )
                ))}
            </Field>
        </Container>
    )
}

export default MobileContainer;