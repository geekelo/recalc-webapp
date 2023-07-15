import React, { useState, useEffect } from 'react';

function DisplayQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=great', {
          headers: { 'X-Api-Key': 'r5o8nzHQqR3Cm3JtFBGGbw==hnNgj9RXggBv2U2U' },
          contentType: 'application/json',
        });
        const quotesList = await response.json();
        setQuotes(quotesList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getQuotes();
  }, []);

  if (loading) {
    return (
      <div className="quoteConatiner">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quoteConatiner">
        <p>Oops! Therec was an Error displaying quote</p>
      </div>
    );
  }

  return (
    <div className="quoteConatiner">
      <h1>&quot;</h1>
      {
      quotes.length > 0
        ? (
          <p>
            {quotes[0].quote}
          </p>
        ) : <p>Loading...</p>
    }
    </div>
  );
}

export default DisplayQuotes;
