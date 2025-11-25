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
        const articleData = res.data?.["article.aml"] || res.data || res;
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
      : (data.items || data.articles || [])
    : [];


  return (
    <div className="App">
      <Header />
      {data && <Landing data={data} />}
      {isDesktop && data && (
        <>
          <TextSection text={typeof data.description_text === 'object' && data.description_text?.text ? data.description_text.text : data.description_text} />
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