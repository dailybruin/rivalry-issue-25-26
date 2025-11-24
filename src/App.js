import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleGrid from "./components/Article_Grid";
import Landing from "./pages/Landing";
import TextSection from "./components/TextSection";
import MobileContainer from "./components/MobileContainer";

function App() {
  const [data, setData] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // FIXME: NEW KERCHOFF PACKAGE
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-25-26"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        console.log("=== KERCKHOFF API RESPONSE ===");
        console.log("Full API Response:", res);
        console.log("Response keys:", Object.keys(res));
        console.log("Response data:", res.data);
        console.log(
          "Response data keys:",
          res.data ? Object.keys(res.data) : "No data object"
        );
        console.log("Article.aml:", res.data?.["article.aml"]);
        console.log("Article.aml type:", typeof res.data?.["article.aml"]);

        const articleData = res.data?.["article.aml"] || res.data || res;
        console.log("=== EXTRACTED DATA ===");
        console.log("Final data object:", articleData);
        console.log(
          "Data keys:",
          articleData ? Object.keys(articleData) : "No data"
        );
        console.log("Articles:", articleData?.articles);
        console.log("Articles count:", articleData?.articles?.length);
        if (articleData?.articles?.length > 0) {
          console.log("First article full object:", articleData.articles[0]);
          console.log(
            "First article keys:",
            Object.keys(articleData.articles[0])
          );
          console.log("Article field check:", {
            article_title: articleData.articles[0]?.article_title,
            article_byline: articleData.articles[0]?.article_byline,
            article_image: articleData.articles[0]?.article_image,
            article_url: articleData.articles[0]?.article_url,
          });
        }
        console.log("Quotes:", articleData?.quotes);
        if (articleData?.quotes?.length > 0) {
          console.log("First quote:", articleData.quotes[0]);
          console.log("Quote structure check:", {
            quote_text: articleData.quotes[0]?.quote_text,
            quote: articleData.quotes[0]?.quote,
          });
        }
        console.log("Sequence:", articleData?.sequence);
        console.log("Sequence length:", articleData?.sequence?.length);
        console.log("Description text:", articleData?.description_text);
        console.log("Landing image:", articleData?.landing_image);

        setData(articleData);
      })
      .catch((error) => {
        console.error("Error fetching data from Kerckhoff API:", error);
        console.error(
          "API URL:",
          "https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-25-26"
        );
      });
  }, []);

  // data is expected to be the parsed article.aml; it may be an object or array depending on API
  const articles = data
    ? Array.isArray(data)
      ? data
      : (data.items || data.articles || []).slice(0, 6)
    : [];

  // debugging logs
  useEffect(() => {
    if (data) {
      const processedArticles = Array.isArray(data)
        ? data
        : (data.items || data.articles || []).slice(0, 6);
      console.log("=== PROCESSED ARTICLES ===");
      console.log("Articles array:", processedArticles);
      console.log("Articles count:", processedArticles.length);
      console.log("First article:", processedArticles[0]);
      if (processedArticles.length > 0) {
        console.log("First article keys:", Object.keys(processedArticles[0]));
      }
    }
  }, [data]);

  return (
    <div className="App">
      <Header />
      {data && <Landing data={data} />}
      {isDesktop && data && (
        <>
          <TextSection text={data.description_text} />
          <main>
            <ArticleGrid articles={articles} quotes={data.quotes || []} />
          </main>
        </>
      )}
      {data && <MobileContainer data={data} />}
      <Footer />
    </div>
  );
}

export default App;
