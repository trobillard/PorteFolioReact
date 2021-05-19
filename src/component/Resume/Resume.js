import React from 'react'
import title from './resume.jpg'

function Resume() {
    return (
        <div className="page" id="portfolio">
            <h2 id="Resume">Resume</h2>
            <section className ="container" id="containerP" >
            <div id="resumeId">
            <img id="cvPicture" src={title} alt="logo"/>
            <div>
            <a href='https://cvdesignr.com/p/606c09f821c7c' className="animated-button1" target="_blank">
            <span></span>
                <span></span>
                <span></span>
                <span></span>
                Resume</a>
            <a href='https://cvdesignr.com/p/602d2b7e47c32?hl=fr_FR' className="animated-button1" target="_blank">
            <span></span>
                <span></span>
                <span></span>
                <span></span>
                CV</a>
            <a href='https://cvdesignr.com/p/606c0a36024c5?hl=fr_FR' className="animated-button1" target="_blank">
            <span></span>
                <span></span>
                <span></span>
                <span></span>
                이력서</a>
                </div>
            </div>
            </section>
            <section>
                <span id="shootingstar"></span>
                <span id="shootingstar"></span>
                <span id="shootingstar"></span>
            </section>
        </div>
    )
}

export default Resume
