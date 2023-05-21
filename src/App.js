import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Current Price</th>
            <th>Volume</th>
            <th>Market Cap Percentage</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => (
            <Table key={coin.id} data={coin} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
