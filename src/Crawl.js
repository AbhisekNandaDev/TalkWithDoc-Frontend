import React, { useState } from 'react';
import './Crawl.css';

const Crawl = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    console.log("submit entered")
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:64/crawl/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "url":url }),
      });
      console.log("response")
      console.log(response)
      if (!response.ok) {
        // If response is not OK, log the status and status text
        console.error('Error submitting URL:', response.status, response.statusText);
      } else {
        console.log('URL submitted successfully');
        // Redirect to "/chat"
        window.location.href = '/chat';
      }
    } catch (error) {
      // Log any error that occurs during the fetch request
      console.error('Failed to submit URL:', error);
    }
  };

  return (
    <div className="crawl-container">
      <form className="crawl-form" onSubmit={ handleSubmit }>
        <h1>Crawl Page URL</h1>
        <label>
          URL:
          <input
            className="input"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Crawl;
