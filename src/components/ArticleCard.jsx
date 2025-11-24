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

  // Fallback image handler
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevents infinite loop
    e.target.src =
      "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found&font=inter";
  };

  // Truncate title to 82 characters
  const truncatedTitle =
    title && title.length > 82 ? title.substring(0, 82) + "..." : title || "";

  return (
    // The entire card is a link, and a 'group' for hover effects
    <a
      href={url}
      target="_blank" // Open in new tab
      rel="noopener noreferrer" // Security best practice
      className="article-card" // Use standard CSS class
    >
      {/* Article Image */}
      <div className="article-card-image-wrapper">
        <img
          className="article-card-image" // Use standard CSS class
          src={imageUrl}
          alt={`Image for article: ${title}`}
          onError={handleImageError}
        />
      </div>

      {/* Article Text Content */}
      <div className="article-card-content">
        {" "}
        {/* Article Title (Headline) - Truncated */}
        <h2 className="article-card-title">
          {" "}
          {truncatedTitle}
        </h2>
        {/* Article Byline (styled as sub-headline) */}
        {byline && (
          <p className="article-card-byline">
            {" "}
            {byline}
          </p>
        )}
      </div>
    </a>
  );
}

// export default function ArticleCard() {

//   const title = "On a whim' to Westwood: Maddie Anyimi's unexpected journey";
//   const byline = "By Jake Moody, Daily Bruin senior staff";
//   const imageUrl = tempImg;
//   const url = "#";

//   // Fallback image handler
//   const handleImageError = (e) => {
//     e.target.onerror = null; // Prevents infinite loop
//     e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found&font=inter';
//   };

//   // Truncate title to 82 characters
//   const truncatedTitle = title.length > 82 ? title.substring(0, 82) + '...' : title;

//   return (
//     // The entire card is a link, and a 'group' for hover effects
//     <a
//       href={url}
//       target="_blank" // Open in new tab
//       rel="noopener noreferrer" // Security best practice
//       className="article-card" // Use standard CSS class
//     >
//       {/* Article Image */}
//       <div className="article-card-image-wrapper">
//             <img
//               className="article-card-image" // Use standard CSS class
//               src={imageUrl}
//               alt={title}
//           onError={handleImageError}
//         />
//       </div>

//       {/* Article Text Content */}
//       <div className="article-card-content"> {/* Use standard CSS class */}
//         {/* Article Title (Headline) - Truncated */}
//         <h2 className="article-card-title"> {/* Use standard CSS class */}
//           {truncatedTitle}
//         </h2>

//         {/* Article Byline (styled as sub-headline) */}
//         {byline && (
//           <p className="article-card-byline"> {/* Use standard CSS class */}
//             {byline}
//           </p>
//         )}
//       </div>
//     </a>
//   );
// }
