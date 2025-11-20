import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleGrid from './components/Article_Grid';

import Landing from './pages/Landing';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    // FIXME: NEW KERCHOFF PACKAGE
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-24-25")
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
      <main>
        <ArticleGrid articles={articles} />
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
