import React from "react";
import stockData from "./Dataportefolio";


export const Stocks = () => {
  return (
    <>
      <div>
        {stockData.map((data, key) => {
          return (
            <div className="col-6 col-sm-4 col-lg-6"> 
            <article className="bg-dark text-center text-white py-5 my-3" key={key}>
              <p>{data.Project}</p>
                <p>{data.Language}</p>
                <p>{data.Time}</p> 
                <p>{data.Detail}</p>
                <p>{data.media}</p>
                <a href={data.link} className="animated-button1" target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Repository Github</a>
                <a href={data.website} className="animated-button1" target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              Website</a>
            </article>
            </div>
          );
        })}
      </div>
    </>
  );
};