import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleGrid from './components/Article_Grid';
import Landing from './pages/Landing';
import TextSection from "./components/TextSection";
import MobileContainer from './components/MobileContainer';


function App() {
  const [ data, setData ] = useState(null);
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
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-25-26")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  // data is expected to be the parsed article.aml; it may be an object or array depending on API
  const articles = data
    ? Array.isArray(data) ? data : (data.items || data.articles || []).slice(0, 6)
    : [];

  return (
    <div className="App">
      <Header />
      <Landing data={data} />
      {isDesktop && (
        <>
        <TextSection text={data.description_text}/>
        <main>
          <ArticleGrid articles={articles} quotes={data.quotes} />
        </main>
        </>
      )}
      <MobileContainer data={data} />
      <Footer />
    </div>
  );
}

export default App;
