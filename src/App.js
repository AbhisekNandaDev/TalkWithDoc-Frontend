import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Crawl from './Crawl';
import Chat from './Chat';
import './App.css'; // Import the CSS file

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1 className="landing-title">RAG Implementation with LLM Chatbot</h1>
      <p className="landing-description">
        This application allows you to interact with webpages using a chatbot. Simply provide a link, and the chatbot will guide you through the experience.
      </p>
      <button className="go-to-crawl-button" onClick={() => navigate('/crawl')}>
        Go to Crawl
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/crawl" element={<Crawl />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
