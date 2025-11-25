import React from "react";
import "./ArticleCard.css"; 
// import tempImg from "../images/CardSampleImg.jpg";

/**
 * A single, responsive Article Card component.
 *
 * Props:
 * - title (string): The main headline (article_title)
 * - byline (string): The author (article_byline)
 * - imageUrl (string): URL for the article image (article_image)
 * - url (string): The link for the entire card (article_url)
 */
export default function ArticleCard({ title, byline, imageUrl, url }) {
  if (!title) return null;

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found&font=inter";
  };

  const truncatedTitle = title.length > 82 ? title.substring(0, 82) + "..." : title;
  console.log(truncatedTitle)
  console.log(url)

  return (
    <div className="article-card">
      <div className="article-card-image-wrapper">
        <img
          className="article-card-image"
          src={imageUrl}
          alt={`Image for article: ${title}`}
          onError={handleImageError}
        />
      </div>

      <div className="article-card-content">
        <h2 className="article-card-title">
          <a href={url}>
            {truncatedTitle}
          </a>
        </h2>

        {byline && <p className="article-card-byline">{byline}</p>}
      </div>
    </div>
  );
}
