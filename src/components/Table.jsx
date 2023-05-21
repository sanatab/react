import React from "react";

const Table = ({ data }) => {
  return (
    <>
      <tr>
        <td>
          <img src={data.image} alt={data.name} />
        </td>
        <td>{data.name}</td>
        <td>{data.symbol.toUpperCase()}</td>
        <td>{data.current_price}</td>
        <td>{data.total_volume}</td>
        <td>{data.market_cap_change_percentage_24h }{"%"}</td>
        <td>{"Mkt Cap : $"}{data.market_cap}</td>
      </tr>
    </>
  );
};

export default Table;
