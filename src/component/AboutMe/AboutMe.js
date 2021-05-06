import React from 'react'
import { Chrono } from "react-chrono"
import Particles from 'react-particles-js';
import data from './DataTimeline'

const AboutMe = () => {
    return (
        <div className="page">
        <div>
            <h2 id="AboutMe">About Me</h2>
        </div>
            <div className="Chrono">
    <Chrono
      items={data}
      mode="HORIZONTAL"
    />
    </div>
    </div>
    )
}

export default AboutMe
