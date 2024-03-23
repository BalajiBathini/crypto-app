// CoinList.js

import React from 'react';
import Coin from './Coin';

function CoinList({ coins }) {
  return (
    <div className="coin-list">
      {coins.map((coin) => (
     <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default CoinList;
