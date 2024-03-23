// App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinList from './Components/CoinList';
import './App.css';


function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: false,
          },
        });
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Cryptocurrency Tracker</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
      />
      <CoinList coins={filteredCoins} />
    </div>
  );
}

export default App;
