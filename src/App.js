import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardMobile from './components/CardMobile';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
    // TODO: REPLACE THIS LINK WITH THE CORRECT LINK FROM THIS YEAR ONCE KERCKHOFF IS FIXED
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/rivalry-issue-24-25")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <CardMobile/>
      <Footer/>
    </div>
  );
}

export default App;
