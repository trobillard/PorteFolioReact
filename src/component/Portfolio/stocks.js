import React from "react";
import stockData from "./Dataportefolio";


export const Stocks = () => {
  return (
    <>
      <div className="row">
        {stockData.map((data, key) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4 p-4 h-100" id="cardport"> 
            <article className="bg-dark text-center text-white py-3 my-2" id="cardTest" key={key}>
              <h2 id="title1">{data.Project}</h2>
                <h2 id="icon1">{data.Language}</h2>
                <h4>{data.Time}</h4> 
                <p>{data.Detail}</p>
                <img className="projectPict"src={data.media}></img><br></br>
                <a href={data.link} className="animated-button1" target="_blank">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Github</a>
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

