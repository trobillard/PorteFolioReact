import React from "react";
import stockData from "./Dataportefolio";


export const Stocks = () => {
  return (
    <>
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.Project +
                " , " +
                data.Language +
                " ," +
                data.Time +
                " ," +
                data.Detail +
                " ," +
                data.Media}
            </div>
          );
        })}
      </div>
    </>
  );
};