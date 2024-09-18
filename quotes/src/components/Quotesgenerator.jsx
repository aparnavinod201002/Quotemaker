import React, { useEffect, useState } from 'react'


import axios from 'axios';

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch random quote
  const fetchRandomQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      setQuote(response.data);
    } catch (err) {
      setError('Failed to fetch the quote');
    } finally {
      setLoading(false);
    }
  };

  // Fetch an initial quote on component mount
  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <blockquote style={{ fontStyle: 'italic', fontSize: '24px' ,color:'darkblue'}}>
            "{quote?.quote}"
          </blockquote>
          <p style={{color:'black'}}>- {quote?.author}</p>
        </div>
      )}

      <button onClick={fetchRandomQuote} style={{ marginTop: '20px', padding: '10px 20px',border:'none',background:'none',fontSize:'30px',color:'red' }}>
      <i class="fa-solid fa-arrows-rotate fa-spin"></i>
      </button>
    </div>
  );
}

export default QuoteGenerator;