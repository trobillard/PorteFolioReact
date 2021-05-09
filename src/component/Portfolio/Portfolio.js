import React from 'react'
import { Stocks } from "./stocks";


function Portfolio() {
    return (
        <div className="pagePortfolio" id="portfolio">
            <h2 id="Portfolio">Portfolio</h2>
            <div className="col">
            <Stocks/>
            </div>
        </div>
    )
}

export default Portfolio
