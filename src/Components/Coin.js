// Coin.js

import React from 'react';

function Coin({ coin }) {
  return (
    <div className="coin">
      <div className="coin-info">
        <div>Rank: {coin.market_cap_rank}</div>
        <div>Name: {coin.name}</div>
        <div>Symbol: {coin.symbol}</div>
        <div>Market Cap: ${coin.market_cap.toLocaleString()}</div>
        <div>Price: ${coin.current_price.toLocaleString()}</div>
        <div>Available Supply: {coin.total_supply}</div>
        <div>Volume (24hrs): ${coin.total_volume.toLocaleString()}</div>
      </div>
      <div className="coin-image">
        <img src={coin.image} alt={coin.name} />
      </div>
    </div>
  );
}

export default Coin;
