// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './index.css';  
import AboutUs from './AboutUs';
import Contact from './Contact';
import Services from './Services';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="background-container">
        <Header />
        <Home />
        <AboutUs/>
        <Contact/>
        <Services/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Header" exact component={Header} />
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Services" exact component={Services} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
