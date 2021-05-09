import React from 'react'
import { Chrono } from "react-chrono"
import Particles from 'react-particles-js';
import data from './DataTimeline'

const AboutMe = () => {
    return (
        <div className="page" id="portfolio">
        <div>
            <h2 id="AboutMe">About Me</h2>
        </div>
            <div className="Chrono" style={{width: "100%"}}>
    <Chrono
      items={data}
      mode="VERTICAL_ALTERNATING"
      theme={{primary: "purple", secondary: "dark",cardForeColor: "pink"}}
    />
    </div>
    </div>
    )
}

export default AboutMe
